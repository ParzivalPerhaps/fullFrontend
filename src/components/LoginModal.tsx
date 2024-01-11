import { useForm } from "react-hook-form";
import { User } from "../models/user";
import { LogInCredentials } from "../network/user_api";
import * as UserApi from "../network/user_api";
import { Button, Form, Modal } from "react-bootstrap";
import TextInputField from "./form/TextInputField";

interface LoginModalProps {
    onDismiss: () => void;
    onLoginSuccessful: (user: User) => void;
}

const LoginModal = ({onDismiss, onLoginSuccessful} : LoginModalProps) => {

    const {register, handleSubmit, formState: {errors, isSubmitting}} = useForm<LogInCredentials>();

    async function onSubmit(credentials : LogInCredentials) {
        try {
            const user = await UserApi.login(credentials);
            onLoginSuccessful(user);
        } catch (error) {
            alert(error);
            console.error(error);
        }
    }

    return ( 
        <Modal show onHide={onDismiss}>
        <Modal.Header closeButton>
            <Modal.Title>
                Log In
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
 
export default LoginModal;