import { title } from "@/components/primitives";
import UsersTable from "./table";

export default function UsersPage() {
  return (
    <div className="w-full">
      {/* <h1 className={title()}></h1> */}
      <div className="mt-5">
        <UsersTable />
      </div>
    </div>
  );
}
