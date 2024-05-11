import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

interface Props {
  title: React.ReactNode;
  children: React.ReactNode;
  delayDuration?: number;
}

export default function TooltipWrapper({
  title,
  children,
  delayDuration,
}: Props) {
  return (
    <TooltipProvider delayDuration={delayDuration}>
      <Tooltip>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent className='z-[200]'>{title}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
