import { ChevronRightIcon } from 'lucide-react';
import { Link } from 'next-view-transitions';
import React from 'react';

export default function LearnMore({href}:{href: string}) {
	return (
		<p className="mt-5">
              <Link
                className="inline-flex items-center gap-x-1 group font-medium hover:underline underline-offset-4 "
                href={href}
              >
                Learn more
                <ChevronRightIcon className="flex-shrink-0 w-4 h-4 transition ease-in-out group-hover:translate-x-1" />
              </Link>
            </p>
	);
}
