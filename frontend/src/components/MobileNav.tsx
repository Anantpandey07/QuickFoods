
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from './ui/sheet'
import { Menu } from 'lucide-react'
import { Separator } from './ui/separator'
import { Button } from './ui/button'

export default function MobileNav() {
  return (
    <Sheet>
        <SheetTrigger>
            <Menu className='text-orange-500'></Menu>
        </SheetTrigger>
        <SheetContent className='space-y-3'>
            <SheetTitle>
                <span>Welcome to QuickFoods.com!</span>
            </SheetTitle>
            <Separator/>
            <SheetDescription className='flex'>
            <Button className='flex-1 font-bold bg-orange-500 py-2'>LogIn</Button>
            </SheetDescription>
        </SheetContent>
    </Sheet>
  )
}
