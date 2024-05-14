import { Button, Dialog, Flex, TextField ,Text, TextFieldInput, Tabs} from '@radix-ui/themes';
import React from 'react'

function SinUp() {
  return (
    <div>
      <Dialog.Root>
        <Dialog.Trigger color='iris'>
          <Button color='iris' size='3' className='w-full'>Edit</Button>
        </Dialog.Trigger>

        <Dialog.Content color='iris' >
          <Dialog.Title>Edit profile</Dialog.Title>
          <Dialog.Description size="2" mb="4">
            Make changes to your profile.
          </Dialog.Description>

          <Flex direction="column" gap="3">
            <label>
              <Text  size="2" weight="bold">
                Name
              </Text>
              <TextField.Root
                defaultValue="Freja Johnsen"
                placeholder="Enter your full name"
              />
              <TextFieldInput color='iris'/>
            </label>
            <label>
              <Text as="div" size="2" mb="1" weight="bold">
                Email
              </Text>
              <TextFieldInput/>
              <TextField.Root
                defaultValue="freja@example.com"
                placeholder="Enter your email"
              />
            </label>
          </Flex>

          <Flex gap="3" mt="4" justify="end">
            <Button mr={'0'} onClick={()=> <TabsDemo/>}>go</Button>
            <Dialog.Close>
              <Button variant="soft" color="gray">
                Cancel
              </Button>
            </Dialog.Close>
            <Dialog.Close>
              <Button>Save</Button>
            </Dialog.Close>
          </Flex>
        </Dialog.Content>
      </Dialog.Root>
    </div>
  );
}

export default SinUp


const TabsDemo = () => (
  
  <Tabs.Root className="TabsRoot" defaultValue="tab1">
    <Tabs.List className="TabsList" aria-label="Manage your account">
      <Tabs.Trigger className="TabsTrigger" value="tab1">
        Account
      </Tabs.Trigger>
      <Tabs.Trigger className="TabsTrigger" value="tab2">
        Password
      </Tabs.Trigger>
    </Tabs.List>
    <Tabs.Content className="TabsContent" value="tab1">
      <p className="Text">
        Make changes to your account here. Click save when you're done.
      </p>
      <fieldset className="Fieldset">
        <label className="Label" htmlFor="name">
          Name
        </label>
        <input className="Input" id="name" defaultValue="Pedro Duarte" />
      </fieldset>
      <fieldset className="Fieldset">
        <label className="Label" htmlFor="username">
          Username
        </label>
        <input className="Input" id="username" defaultValue="@peduarte" />
      </fieldset>
      <div
        style={{ display: "flex", marginTop: 20, justifyContent: "flex-end" }}
      >
        <button className="Button green">Save changes</button>
      </div>
    </Tabs.Content>
    <Tabs.Content className="TabsContent" value="tab2">
      <p className="Text">
        Change your password here. After saving, you'll be logged out.
      </p>
      <fieldset className="Fieldset">
        <label className="Label" htmlFor="currentPassword">
          Current password
        </label>
        <input className="Input" id="currentPassword" type="password" />
      </fieldset>
      <fieldset className="Fieldset">
        <label className="Label" htmlFor="newPassword">
          New password
        </label>
        <input className="Input" id="newPassword" type="password" />
      </fieldset>
      <fieldset className="Fieldset">
        <label className="Label" htmlFor="confirmPassword">
          Confirm password
        </label>
        <input className="Input" id="confirmPassword" type="password" />
      </fieldset>
      <div
        style={{ display: "flex", marginTop: 20, justifyContent: "flex-end" }}
      >
        <button className="Button green">Change password</button>
      </div>
    </Tabs.Content>
  </Tabs.Root>
);

