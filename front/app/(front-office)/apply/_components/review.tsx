import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
interface ReviewProps {
  formData: {
    personalInfo: any;
    academicInfo: any;
    programSelection: any;
    documents: any;
  };
}
export function Review({ formData }: ReviewProps) {
  const { personalInfo, academicInfo, programSelection, documents } = formData;
  return (
    <div className='space-y-8'>
      <div>
        <h3 className='mb-4 text-lg font-semibold'>Personal Information</h3>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell className='font-medium'>Full Name</TableCell>
              <TableCell>
                {personalInfo.firstName} {personalInfo.lastName}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className='font-medium'>Email</TableCell>
              <TableCell>{personalInfo.email}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className='font-medium'>Phone</TableCell>
              <TableCell>{personalInfo.phone}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className='font-medium'>Address</TableCell>
              <TableCell>
                {personalInfo.address}, {personalInfo.city},{' '}
                {personalInfo.state}
                {personalInfo.zipCode}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <div>
        <h3 className='mb-4 text-lg font-semibold'>Academic Information</h3>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell className='font-medium'>High School</TableCell>
              <TableCell>{academicInfo.highSchool}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className='font-medium'>GPA</TableCell>
              <TableCell>{academicInfo.gpa}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className='font-medium'>Graduation Year</TableCell>
              <TableCell>{academicInfo.graduationYear}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className='font-medium'>Education Level</TableCell>
              <TableCell>{academicInfo.educationLevel}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <div>
        <h3 className='mb-4 text-lg font-semibold'>Program Selection</h3>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell className='font-medium'>Program</TableCell>
              <TableCell>{programSelection.program}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className='font-medium'>Start Term</TableCell>
              <TableCell>{programSelection.startTerm}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className='font-medium'>Enrollment Status</TableCell>
              <TableCell>{programSelection.enrollmentStatus}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className='font-medium'>Application Type</TableCell>
              <TableCell>{programSelection.applicationType}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <div>
        <h3 className='mb-4 text-lg font-semibold'>Documents</h3>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell className='font-medium'>Transcript</TableCell>
              <TableCell>{documents.transcript || 'Not uploaded'}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className='font-medium'>Resume/CV</TableCell>
              <TableCell>{documents.resume || 'Not uploaded'}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className='font-medium'>
                Letter of Recommendation
              </TableCell>
              <TableCell>
                {documents.letterOfRecommendation || 'Not uploaded'}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className='font-medium'>Portfolio</TableCell>
              <TableCell>{documents.portfolio || 'Not uploaded'}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <div className='rounded-lg bg-muted p-4'>
        <p className='text-sm text-muted-foreground'>
          Please review all information carefully before submitting your
          application. By submitting this application, you confirm that all
          information provided is accurate and complete to the best of your
          knowledge.
        </p>
      </div>
    </div>
  );
}
