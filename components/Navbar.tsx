import Image from "next/image";
import Link from "next/link";
import logo from '@/app/favicon.ico';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Navbar() {
    return (
        <div className='bg-primary text-white dark:bg-slate-700 py-2 px-5 flex justify-between'>
            <Link href='/'>
                <Image alt='Admin Dashboard' width={40} src={logo}></Image>
            </Link>

            <DropdownMenu>
                <DropdownMenuTrigger className="focus:outline-none">
                    <Avatar>
                        <AvatarImage src='https://github.com/shadcn.png' alt='@shadcn' />
                        <AvatarFallback className="text-black">RZ</AvatarFallback>
                    </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                        <Link href='/profile'>
                            Profile
                        </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <Link href='/auth'>
                            Logout
                        </Link>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>

        </div>
    )
}
