import { assignment } from '@/Data/Data'
import Todo from '@/components/Todo'
import Assignment from '@/components/Table'
import Calender from '@/components/Calendar'
import Card1 from '@/components/Card1'
import Progress from '@/components/Progress'
import { ResultData } from '@/Data/ResultData'
import Marks from '@/components/Marks'
import { data } from '@/Data/Data'

export default function Home() {
  return (
    <div className='center h-screen w- screen'>
      <Marks data={data.StudentProgress}/>
    </div>
  )
}





