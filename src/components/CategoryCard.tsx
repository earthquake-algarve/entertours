import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"


type CategoryCardProps = {
    title: string
    icon:any
}

export default function CategoryCard({title, icon}: CategoryCardProps) {
  return (
      <Card className=" bg-orange-300 border-none mt-1">
          <CardContent className="flex flex-col justify-center items-center">
              <span className="font-bold items-center ">
                  {title}
              </span>
              {icon}
          </CardContent>
      </Card>
  )
}
