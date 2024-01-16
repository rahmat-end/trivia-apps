// /** @format */

// // AddUserModal.tsx
// import React from "react";
// import {
//   Modal,
//   ModalOverlay,
//   ModalContent,
//   ModalHeader,
//   ModalBody,
//   ModalCloseButton,
//   Input,
//   Button,
//   Box,
// } from "@chakra-ui/react";
// import useSetting from "../hooks/useSetting";

// interface AddSettingProps {
//   isOpen: boolean;
//   onClose: () => void;
//   newUserData: { username: string; avatarUrl: string };
//   setNewUserData: React.Dispatch<
//     React.SetStateAction<{ username: string; avatarUrl: string }>
//   >;
//   handleSubmit: () => void;
// }

// const AddSetting: React.FC<AddSettingProps> = ({ isOpen, onClose }) => {
//   const { , getSetting } = useSetting();
//   return (
//     <Modal
//       isOpen={isOpen}
//       onClose={onClose}>
//       <ModalOverlay />
//       <ModalContent bgColor={"gray.800"}>
//         <ModalHeader color={"white"}>Add Buy Avatar</ModalHeader>
//         <ModalCloseButton />
//         <ModalBody>
//           <form encType='multipart/form-data'>
//             <Input
//               type='file'
//               name='photo_buyavatar'
//               mt={4}
//               alignItems={"center"}
//               display={"flex"}
//             />
//             <Input
//               placeholder='Enter amount'
//               name='price_buyavatar'
//               color={"white"}
//               type='number'
//             />
//             <Box
//               mt={4}
//               width={"100%"}
//               display={"flex"}>
//               <Button
//                 type='submit'
//                 colorScheme='blue'
//                 alignItems={"center"}
//                 justifyContent={"end"}>
//                 {" "}
//                 Add buy Avatar
//               </Button>
//             </Box>
//           </form>
//         </ModalBody>
//       </ModalContent>
//     </Modal>
//   );
// };

// export default AddSetting;
