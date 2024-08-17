import { PageHeader } from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function UsersManagement() {
  return (
		<>
			<PageHeader >
				<span>Users management</span>
                <Button asChild>
                    <Link href='/admin/users/new'>Add user</Link>
                </Button>
			</PageHeader>
		</>
  );
}
