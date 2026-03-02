import React, { useState } from 'react'
import { Button, Input, Textarea , Card, Typography, Dialog, DialogHeader, DialogBody, DialogFooter , Select, Option} from '@material-tailwind/react'

const Subcategory = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(!open);
    const TABLE_HEAD = ["Title", "Category", "Date", "Actions"];
     
    const TABLE_ROWS = [
    {
        name: "John Michael",
        job: "Manager",
        date: "23/04/18",
    },
    {
        name: "Alexa Liras",
        job: "Developer",
        date: "23/04/18",
    },
    {
        name: "Laurent Perrier",
        job: "Executive",
        date: "19/09/17",
    },
    {
        name: "Michael Levi",
        job: "Developer",
        date: "24/12/08",
    },
    {
        name: "Richard Gran",
        job: "Manager",
        date: "04/10/21",
    },
    {
        name: "John Michael",
        job: "Manager",
        date: "23/04/18",
    },
    {
        name: "Alexa Liras",
        job: "Developer",
        date: "23/04/18",
    },
    {
        name: "Laurent Perrier",
        job: "Executive",
        date: "19/09/17",
    },
    {
        name: "Michael Levi",
        job: "Developer",
        date: "24/12/08",
    },
    {
        name: "Richard Gran",
        job: "Manager",
        date: "04/10/21",
    },
    
    ];
  return (
   <div>
        <div className='flex flex-col gap-y-4'>
            <div>
                <Input size="md" label="Name" />
            </div>
            <Select color="purple" label="Select Version">
                <Option>Material Tailwind HTML</Option>
                <Option>Material Tailwind React</Option>
                <Option>Material Tailwind Vue</Option>
                <Option>Material Tailwind Angular</Option>
                <Option>Material Tailwind Svelte</Option>
            </Select>
            <Button variant="filled" color='green' loading={false} className='w-[10%]'>
                Create
            </Button>
        {/* banner table list section */}
        
            <Card className="h-[320px] w-full overflow-y-scroll">
                <table className="w-full min-w-max table-auto text-center">
                <thead className='sticky top-0 z-10'>
                    <tr>
                    {TABLE_HEAD.map((head) => (
                        <th
                        key={head}
                        className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                        >
                        <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal leading-none opacity-70"
                        >
                            {head}
                        </Typography>
                        </th>
                    ))}
                    </tr>
                </thead>
                <tbody>
                    {TABLE_ROWS.map(({ name, job, date }, index) => {
                    const isLast = index === TABLE_ROWS.length - 1;
                    const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50 text-center";

                    return (
                        <tr key={name}>
                        <td className={classes}>
                            <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                            >
                            {name}
                            </Typography>
                        </td>
                        <td className={classes}>
                            <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                            >
                            {job}
                            </Typography>
                        </td>
                        <td className={classes}>
                            <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                            >
                            {date}
                            </Typography>
                        </td>
                        <td className={classes}>
                            <div className='flex items-center gap-x-3 justify-center'>
                            <Button color="red">Delete</Button>
                            <Button onClick={handleOpen} color="green">Update</Button>
                            </div>
                        </td>
                        </tr>
                    );
                    })}
                </tbody>
                </table>
            </Card>
        </div>
    {/* Edit modal body section  */}
        <Dialog
        open={open}
        handler={handleOpen}
        animate={{
            mount: { scale: 1, y: 0 },
            unmount: { scale: 0.9, y: -100 },
        }}
        >
        <DialogHeader>CateGory Edit</DialogHeader>
        <DialogBody className='flex flex-col gap-y-3'>
            <div>
                <Input size="md" label="Name" />
            </div>
            <Select color="purple" label="Select Version">
                <Option>Material Tailwind HTML</Option>
                <Option>Material Tailwind React</Option>
                <Option>Material Tailwind Vue</Option>
                <Option>Material Tailwind Angular</Option>
                <Option>Material Tailwind Svelte</Option>
            </Select>
        </DialogBody>
        <DialogFooter>
            <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
            >
            <span>Cancel</span>
            </Button>
            <Button variant="gradient" color="green" onClick={handleOpen}>
            <span>Confirm</span>
            </Button>
        </DialogFooter>
        </Dialog>
    </div>
  )
}

export default Subcategory
