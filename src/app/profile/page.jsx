'use client';
import { authClient } from '@/lib/auth-client';
import { Avatar } from '@heroui/react';
import {Button, Input, Label, Modal, Surface, TextField} from "@heroui/react";
import { BiUserCircle } from 'react-icons/bi';

const ProfilePage = () => {
    const userData = authClient.useSession();
    const user = userData.data?.user;
    
     const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userData = {};
    // Convert FormData to plain object
    formData.forEach((value, key) => {
      userData[key] = value.toString();
    });
    console.log(userData);

    await authClient.updateUser({
    image: userData.image,
    name: userData.name,
})
   };

    return (
        <div>
            <div className='max-w-4/12 mx-auto mt-10 shadow-xl rounded-lg px-6 py-11'>
                <Avatar className=' h-21 w-21 mx-auto'>
                    <Avatar.Image alt="Image" src={user?.image} referrerPolicy="no-referrer" />
                    <Avatar.Fallback>{user?.name[0]}</Avatar.Fallback>
                </Avatar>
                <h2 className='text-center mt-4 text-2xl font-bold'>{user?.name}</h2>
                <p className='text-center mt-2 text-gray-500'>{user?.email}</p>

             <Modal>
      <div className='flex justify-center mt-6'><Button variant="secondary">Update Information</Button></div>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                <BiUserCircle className="size-5" />
              </Modal.Icon>
              <Modal.Heading>Update Information</Modal.Heading>
             
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                <form onSubmit={onSubmit} className="flex flex-col gap-4">
                  <TextField  className="w-full" name="name" type="text">
                    <Label>Name</Label>
                    <Input placeholder="Enter your name" />
                  </TextField>
                  <TextField className="w-full" name="image" type="text">
                    <Label>Image URL</Label>
                    <Input placeholder="Enter image URL" />
                  </TextField>
                   <Modal.Footer>
              <Button slot="close" variant="secondary">
                Cancel
              </Button>
              <Button type="submit" slot="close" variant="primary">
                Save Changes
              </Button>
            </Modal.Footer>
                 
                </form>
              </Surface>
            </Modal.Body>
          
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
            </div>
        </div>
    );
};

export default ProfilePage;