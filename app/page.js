import {assignment} from '@/Data/Data'
import Assignment from '@/components/Assignment'
import Card1 from '@/components/Card1'
import Image from 'next/image'


export default function Home() {
  return (
    <div className='center h-screen w- screen'>
      <Assignment
        assignment={assignment}
      />
    </div>
  )
}
