import { FileType } from "@/typings";
import { Button } from "../ui/button";
import { columns } from "./columns";
import { DataTable } from "./Table";
function TableWrapper({ skeletonFiles }: { skeletonFiles: FileType[] }) {
  return (
    <div>
      <Button>Sort by...</Button>

      <DataTable columns={columns} data={skeletonFiles} />
    </div>
  );
}

export default TableWrapper;
