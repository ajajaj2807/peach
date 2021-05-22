import React, { useRef } from "react";
import { useForm } from "react-hook-form";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  Button,
  useDisclosure,
  useToast,
  Icon,
} from "@chakra-ui/react";
import { createSite } from "@/lib/db";
import { useAuth } from "@/lib/auth";

const AddSiteModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = useRef();
  const toast = useToast();
  const auth = useAuth();
  const { handleSubmit, register } = useForm();
  const createSiteLocal = ({ name, url }) => {
    createSite({
      author: auth.user.uid,
      createdAt: new Date().toISOString(),
      name,
      url,
    });
    toast({
      title: "Hurray! 🎉",
      description: "Your site has been added successfully.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
    onClose();
  };

  return (
    <>
      <Button fontWeight="medium" maxWidth="300px" onClick={onOpen}>
        Add a site
      </Button>

      <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent as="form" onSubmit={handleSubmit(createSiteLocal)}>
          <ModalHeader fontWeight="bold">Add Site</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input
                ref={initialRef}
                placeholder="My Site"
                {...register("name", {
                  required: "Required",
                })}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Link</FormLabel>
              <Input
                placeholder="https://ajajaj.me"
                {...register("url", {
                  required: "Required",
                })}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button onClick={onClose}>Cancel</Button>
            <Button
              backgroundColor="#6CD4FF"
              color="black"
              mr={3}
              type="submit"
            >
              Create
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
export default AddSiteModal;
