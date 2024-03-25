import React, { useState, FormEvent } from 'react';
import styled from '@emotion/styled';
import {
  DARK_GRAY_COLOR,
  CONTACT_PAGE_BORDER_COLOR,
  LETTER_CONTAINER_BACKGROUND_COLOR,
  TRIANGLE_COLOR,
} from 'const/colors';
import { StyledButton } from 'components/buttons';

const ContactsPage: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <ContactsContainer>
      <HeaderContainer>
        <Header>Contact</Header>
      </HeaderContainer>
      <LetterContainer>
        <LetterBody>
          <form onSubmit={handleSubmit}>
            <FormGroup>
              <Input
                type="text"
                id="name"
                value={name}
                placeholder="Имя:"
                onChange={(e) => setName(e.target.value)}
                required
              />
            </FormGroup>
            <FormGroup>
              <Input
                type="email"
                id="email"
                value={email}
                placeholder="Адрес почты:"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </FormGroup>
            <FormGroup>
              <Textarea
                id="message"
                value={message}
                placeholder="Сообщение:"
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </FormGroup>
            <StyledButton type="submit">Отправить</StyledButton>
          </form>
        </LetterBody>
      </LetterContainer>
    </ContactsContainer>
  );
};

export default ContactsPage;

const ContactsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  min-height: 70vh;
  background-color: ${TRIANGLE_COLOR};
`;

const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin: 20px 0;
`;

const Header = styled.h1`
  color: ${DARK_GRAY_COLOR};
  font-size: 40px;
`;
const LetterContainer = styled.div`
  position: relative;
  width: 400px;
  background-color: ${LETTER_CONTAINER_BACKGROUND_COLOR};
  padding: 20px;
  border: 2px solid #ccc;
  border-radius: 10px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 50px;
`;

const LetterBody = styled.div`
  margin-top: 20px;
`;

const FormGroup = styled.form`
  margin-bottom: 20px;
`;

const Input = styled.input`
  width: calc(100% - 20px);
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  border: 1px solid ${CONTACT_PAGE_BORDER_COLOR};
`;

const Textarea = styled.textarea`
  width: calc(100% - 20px);
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  border: 1px solid ${CONTACT_PAGE_BORDER_COLOR};
  resize: vertical;
`;
