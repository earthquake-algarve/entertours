import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {  MdOutlineStarPurple500 } from "react-icons/md";
import Image from "next/image";
import { formatCurrency } from "@/lib/formatters";


export default function HomeCard() {
  return (
      <Card className="w-fit border-none shadow-lg rounded-md">
          <Image src="/banner.png" alt="card image" width={300}
              height={230} className="rounded-md" />
          <CardHeader>
              <CardTitle>Titulo tour</CardTitle>
          </CardHeader>
          <CardContent className="flex justify-between">
              <div className="flex flex-col">
                  <span className="">City Tour</span>
                  <span className="">1.5 horas</span>
              </div>
              <div className="">
                  <span className="font-semibold text-3xl">{formatCurrency(40)}</span>
              </div>

          </CardContent>
          <CardFooter className="">
              <MdOutlineStarPurple500 color="#FFFF00" size={20} />
              <MdOutlineStarPurple500 color="#FFFF00" size={20} />
              <MdOutlineStarPurple500 color="#FFFF00" size={20} />
              <MdOutlineStarPurple500 color="#FFFF00" size={20} />
              <MdOutlineStarPurple500 color="#FFFF00" size={20} />
              5.0 (140 reviews)
          </CardFooter>
      </Card>
  )
}
