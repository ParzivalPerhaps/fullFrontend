import { useForm } from "react-hook-form";
import { User } from "../models/user";
import { SignUpCredentials } from "../network/user_api";
import * as UserApi from "../network/user_api";
import { Button, Form, Modal, ModalBody } from "react-bootstrap";
import TextInputField from "./form/TextInputField";
import styles from "../styles/utils.module.css";

interface SignUpModalProps {
    onDismiss: () => void,
    onSignUpSuccessful: (user : User) => void
}


const SignUpModal = ({onDismiss, onSignUpSuccessful}: SignUpModalProps) => {

    const {register, handleSubmit, formState : {errors, isSubmitting}} = useForm<SignUpCredentials>();

    async function onSubmit(credentials : SignUpCredentials) {
        console.log("submitting");
        
        try {
            const newUser = await UserApi.signup(credentials);
            onSignUpSuccessful(newUser);
            console.log("submitted successfully");
            
        } catch (error) {
            alert(error);
            console.log(error);
        }
    }

    return (
        <Modal show onHide={onDismiss}>
        <Modal.Header closeButton>
            <Modal.Title>
                Sign Up
            </Modal.Title>
        </Modal.Header>

        <Modal.Body>
            
            <Form onSubmit={handleSubmit(onSubmit)}>
                <TextInputField
                    name="username"
                    label="Username"
                    type="text"
                    placeholder="Username"
                    register={register}
                    registerOptions={{ required: "Required" }}
                    error={errors.username}
                />
                <TextInputField
                    name="email"
                    label="Email"
                    type="email"
                    placeholder="Email"
                    register={register}
                    registerOptions={{ required: "Required" }}
                    error={errors.email}
                />
                <TextInputField
                    name="password"
                    label="Password"
                    type="password"
                    placeholder="Password"
                    register={register}
                    registerOptions={{ required: "Required" }}
                    error={errors.password}
                />
                <Button
                    type="submit"
                    disabled={isSubmitting}
                    style={{width:"100%"}}>
                    Sign Up
                </Button>
            </Form>
        </Modal.Body>

    </Modal>

    );
} 

export default SignUpModal;