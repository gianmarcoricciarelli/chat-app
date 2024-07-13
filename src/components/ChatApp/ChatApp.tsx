import { Container } from '../Container/Container';
import { Label } from '../Label/Label';
import { FC } from 'react';

export const ChatApp: FC = () => {
    return (
        <Container height="100dvh" width="100dvw">
            <Label color="paleViolet">hello</Label>
        </Container>
    );
};
