import {assignment} from '@/Data/Data'
import Todo from '@/components/Todo'
import Assignment from '@/components/Assignment'
import Calender from '@/components/Calendar'
import Card1 from '@/components/Card1'
import Progress from '@/components/Progress'
import { ResultData } from '@/Data/ResultData'

export default function Home() {
  return (
    <div className='center h-screen w- screen'>
      <Assignment/>
      {/* <Calender/> */}
      {/* <Progress data = {ResultData}/> */}
    </div>
  )
}





