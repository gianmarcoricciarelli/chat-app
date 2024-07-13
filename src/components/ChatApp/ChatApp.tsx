import { Container } from '../Container/Container';
import { Label } from '../Label/Label';
import { FC } from 'react';

export const ChatApp: FC = () => {
    return (
        <Container height="100dvh" width="100dvw" display="flex">
            <Container
                height="100%"
                maxWidth="50%"
                display="flex"
                flexDirection="column"
                flexGrow={1}
            >
                <Label color="paleViolet">hello</Label>
            </Container>
            <Container
                height="100%"
                maxWidth="50%"
                display="flex"
                flexDirection="column"
                justifyContent="center"
                flexGrow={1}
                gap="20px"
            >
                <Label
                    Component="h1"
                    color="veryDarkDesaturatedViolet"
                    fontWeight="bold"
                >
                    Simple booking
                </Label>
                <Label color="darkGrayishViolet">
                    Stay in touch with out dog walkers through the chat
                    interface. This makes it easy to discuss arrangements and
                    make bookings. Once the walk has been completed you can rate
                    your walker and book again all through the chat.
                </Label>
            </Container>
        </Container>
    );
};
