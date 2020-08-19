import React, { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { format, parseISO } from 'date-fns';

import { useAuth } from '../../hooks/auth';

import { Container, Title, Nav, Profile, ProfileInfo } from './styles';
import DefaultProfile from '../../assets/profile.png';
import Button from '../Button';

const Header: React.FC = () => {
  const [showProfileInfo, setShowProfileInfo] = useState(false);

  const { signOut, user } = useAuth();
  const memberSince = format(
    parseISO(user.created_at),
    "'Membro desde ' MMM, yyyy",
  );

  return (
    <Container>
      <Title to="/home">
        <span>Admin</span>
        Store
      </Title>
      <Nav>
        <button type="button">
          <FiMenu />
        </button>
        <Profile
          type="button"
          onClick={() => setShowProfileInfo(!showProfileInfo)}
        >
          <img
            src={user.avatar_url || DefaultProfile}
            alt="Emerson Oliveira da Hora"
          />
          {user.short_name}
        </Profile>
        {showProfileInfo && (
          <ProfileInfo>
            <img
              src={user.avatar_url || DefaultProfile}
              alt="Emerson Oliveira da Hora"
            />
            <span>{user.name}</span>
            <small>{memberSince}</small>
            <div>
              <Button onClick={() => alert('Em desenvolvimento.')}>
                Perfil
              </Button>
              <Button onClick={signOut}>Sair</Button>
            </div>
          </ProfileInfo>
        )}
      </Nav>
    </Container>
  );
};

export default Header;
