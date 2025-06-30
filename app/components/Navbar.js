import Link from "next/link"
import Container from "./Container"
import { BsArrowRight } from "react-icons/bs";
import Button from "./Button";

const menuItem=[
    {id: 1, name: "Home", path: "/"},
    {id: 2, name: "About", path: "/about"},
    {id: 3, name: "Portfolio", path: "/portfolio"},
    {id: 4, name: "Blogs", path: "/blog"}
]

const Navbar = () => {
  return (
    <nav className="bg-[#00000003] absolute w-full top-0 left-0 ">
        <Container className="flex items-center justify-between py-7">
           <div className="uppercase text-[34px] font-extrabold leading-[34px] -tracking-[0.02em] ">develop.me</div>
           <div className="flex gap-[67px] items-center ">
                <ul className="flex gap-9">
                    {
                        menuItem.map((item)=>(
                            <li key={item.id} >
                                <Link href={item.path} >{item.name}</Link>
                            </li>
                            )
                        )
                    }
                </ul>
                <Button className="font-sporting pr-3" iconClass="w-[38px] h-[38px]" icon={<BsArrowRight/>} label="Start project" labelClass="text-base "/>
           </div>
        </Container>
    </nav>
  )
}

export default Navbar