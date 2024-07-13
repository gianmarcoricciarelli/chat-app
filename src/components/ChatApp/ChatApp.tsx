import { Container } from '../Container/Container';
import { Label } from '../Label/Label';
import { FC } from 'react';

export const ChatApp: FC = () => {
    return (
        <Container height="100dvh" width="100dvw" display="flex">
            <Container height="100%" display="flex" flexGrow={1}>
                <Label color="paleViolet">hello</Label>
            </Container>
            <Container
                height="100%"
                display="flex"
                flexGrow={1}
                alignItems="center"
            >
                <Label color="darkGrayishViolet">hello hello</Label>
            </Container>
        </Container>
    );
};
