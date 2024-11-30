"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Upload, X } from "lucide-react";

interface DocumentsProps {
  data: any;
  updateData: (data: any) => void;
}

export function Documents({ data, updateData }: DocumentsProps) {
  const [files, setFiles] = useState<{ [key: string]: File | null }>({
    transcript: null,
    resume: null,
    letterOfRecommendation: null,
    portfolio: null,
  });

  const handleFileChange = (field: string, file: File | null) => {
    setFiles((prev) => ({ ...prev, [field]: file }));
    updateData({ [field]: file ? file.name : null });
  };

  const removeFile = (field: string) => {
    handleFileChange(field, null);
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label>Official Transcript</Label>
        <div className="flex items-center gap-4">
          <Input
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={(e) => handleFileChange("transcript", e.target.files?.[0] || null)}
            className="hidden"
            id="transcript"
          />
          <Button
            variant="outline"
            className="w-full"
            onClick={() => document.getElementById("transcript")?.click()}
          >
            <Upload className="mr-2 h-4 w-4" />
            {files.transcript ? files.transcript.name : "Upload Transcript"}
          </Button>
          {files.transcript && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => removeFile("transcript")}
            >
              <X className="h-4 w-4" />
            </Button>
          )}
        </div>
        <p className="text-sm text-muted-foreground">
          Upload your most recent academic transcript (PDF or DOC format)
        </p>
      </div>

      <div className="space-y-2">
        <Label>Resume/CV</Label>
        <div className="flex items-center gap-4">
          <Input
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={(e) => handleFileChange("resume", e.target.files?.[0] || null)}
            className="hidden"
            id="resume"
          />
          <Button
            variant="outline"
            className="w-full"
            onClick={() => document.getElementById("resume")?.click()}
          >
            <Upload className="mr-2 h-4 w-4" />
            {files.resume ? files.resume.name : "Upload Resume"}
          </Button>
          {files.resume && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => removeFile("resume")}
            >
              <X className="h-4 w-4" />
            </Button>
          )}
        </div>
        <p className="text-sm text-muted-foreground">
          Include your current resume or CV highlighting your experiences and achievements
        </p>
      </div>

      <div className="space-y-2">
        <Label>Letter of Recommendation</Label>
        <div className="flex items-center gap-4">
          <Input
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={(e) => handleFileChange("letterOfRecommendation", e.target.files?.[0] || null)}
            className="hidden"
            id="recommendation"
          />
          <Button
            variant="outline"
            className="w-full"
            onClick={() => document.getElementById("recommendation")?.click()}
          >
            <Upload className="mr-2 h-4 w-4" />
            {files.letterOfRecommendation ? files.letterOfRecommendation.name : "Upload Letter"}
          </Button>
          {files.letterOfRecommendation && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => removeFile("letterOfRecommendation")}
            >
              <X className="h-4 w-4" />
            </Button>
          )}
        </div>
        <p className="text-sm text-muted-foreground">
          Submit at least one letter of recommendation from a teacher or professional
        </p>
      </div>

      <div className="space-y-2">
        <Label>Portfolio (Optional)</Label>
        <div className="flex items-center gap-4">
          <Input
            type="file"
            accept=".pdf,.doc,.docx,.zip"
            onChange={(e) => handleFileChange("portfolio", e.target.files?.[0] || null)}
            className="hidden"
            id="portfolio"
          />
          <Button
            variant="outline"
            className="w-full"
            onClick={() => document.getElementById("portfolio")?.click()}
          >
            <Upload className="mr-2 h-4 w-4" />
            {files.portfolio ? files.portfolio.name : "Upload Portfolio"}
          </Button>
          {files.portfolio && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => removeFile("portfolio")}
            >
              <X className="h-4 w-4" />
            </Button>
          )}
        </div>
        <p className="text-sm text-muted-foreground">
          Share your writing samples, media projects, or other relevant work (PDF or ZIP format)
        </p>
      </div>
    </div>
  );
}