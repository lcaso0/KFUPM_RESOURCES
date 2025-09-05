import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

export default function Loading() {
  return (
    <div className='container mx-auto px-6 py-12'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
        {[...Array(8)].map((_, i) => (
          <Card
            key={i}
            className='h-full border-2 border-border/50 rounded-xl flex flex-col justify-between'
          >
            <CardHeader className='pb-3'>
              <div className='flex items-center justify-between'>
                {/* Folder icon skeleton */}
                <Skeleton className='h-10 w-10 rounded-lg' />
                {/* Chevron skeleton */}
                <Skeleton className='h-5 w-5 rounded-full' />
              </div>
            </CardHeader>
            <CardContent>
              {/* Title skeleton */}
              <Skeleton className='h-5 w-3/4 mb-3 rounded-md' />
              {/* Paragraph skeleton (2 lines) */}
              <Skeleton className='h-4 w-full mb-2 rounded-md' />
              <Skeleton className='h-4 w-2/3 rounded-md' />
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
