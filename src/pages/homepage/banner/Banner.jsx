import React, { useState } from 'react'
import { Button, Input , Card, Typography, Dialog, DialogHeader, DialogBody, DialogFooter} from '@material-tailwind/react'


const Banner = () => {
   const [open, setOpen] = useState(false);
   const handleOpen = () => setOpen(!open);

  const TABLE_HEAD = ["Title", "Banner", "Date", "Actions"];
 
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
      <h1>Banner</h1>

      {/* Banner title & Upload Section */}

      <div className='flex flex-col gap-y-5 mt-3'>
        <div>
            <Input size="md" label="Banner Title" />
        </div>

        <div class="flex items-center  rounded-[8px] justify-center w-full">
            <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-50 bg-[#E5E7EB] border-2 border-dashed border-gray-400 rounded-[8px] cursor-pointer hover:bg-gray-200">
                <div class="flex flex-col items-center justify-center text-body pt-5 pb-6">
                    <svg class="w-8 h-8 mb-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h3a3 3 0 0 0 0-6h-.025a5.56 5.56 0 0 0 .025-.5A5.5 5.5 0 0 0 7.207 9.021C7.137 9.017 7.071 9 7 9a4 4 0 1 0 0 8h2.167M12 19v-9m0 0-2 2m2-2 2 2"/></svg>
                    <p class="mb-2 text-sm"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                    <p class="text-xs">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                </div>
                <input id="dropzone-file" type="file" class="hidden" />
            </label>
        </div> 

        <Button variant="outlined" loading={false} className='w-[10%]'>
          Upload
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
                        <Button onClick={handleOpen} color="green">Edit</Button>
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
        <DialogHeader>Banner Edit</DialogHeader>
        <DialogBody className='flex flex-col gap-y-3'>
          <div>
            <Input size="md" label="Banner Title" />
          </div>

          <div class="flex items-center  rounded-[8px] justify-center w-full">
              <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 bg-[#E5E7EB] border-2 border-dashed border-gray-400 rounded-[8px] cursor-pointer hover:bg-gray-200">
                  <div class="flex flex-col items-center justify-center text-body pt-5 pb-6">
                      <svg class="w-8 h-8 mb-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h3a3 3 0 0 0 0-6h-.025a5.56 5.56 0 0 0 .025-.5A5.5 5.5 0 0 0 7.207 9.021C7.137 9.017 7.071 9 7 9a4 4 0 1 0 0 8h2.167M12 19v-9m0 0-2 2m2-2 2 2"/></svg>
                      <p class="mb-2 text-sm"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                      <p class="text-xs">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                  </div>
                  <input id="dropzone-file" type="file" class="hidden" />
              </label>
          </div> 
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

export default Banner
