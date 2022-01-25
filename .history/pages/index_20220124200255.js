import { Box, Button, Text, TextField, Image } from '@skynexui/components';
import appConfig from '../config.json';

function GlobalStyle() {
  return (
    <style global jsx>{`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
      }
      body {
        font-family: 'Open Sans', sans-serif;
      }
      /* App fit Height */ 
      html, body, #__next {
        min-height: 100vh;
        display: flex;
        flex: 1;
      }
      #__next {
        flex: 1;
      }
      #__next > * {
        flex: 1;
      }
      /* ./App fit Height */ 
    `}</style>
  );
}

function Titulo(props) {
  const Tag = props.tag || 'h1';
  return (
    <>
      <Tag>{props.children}</Tag>
      <style jsx>{`
            ${Tag} {
                color: ${appConfig.theme.colors.neutrals['000']};
                font-size: 24px;
                font-weight: 600;
            }
            `}</style>
    </>
  );
}


export default function PaginaInicial() {
  const username = 'peas';

  return (
    <>
      <GlobalStyle />
      <Box
        styleSheet={{
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          backgroundImage: 'url(data:image/jpeg;base64,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)',
          backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply',
        }}
      >
        <Box
          styleSheet={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: {
              xs: 'column',
              sm: 'row',
            },
            width: '100%', maxWidth: '700px',
            borderRadius: '5px', padding: '32px', margin: '16px',
            boxShadow: '0 2px 10px 0 rgb(0 0 0 / 90%)',
            background: "rgba( 255, 255, 255, 0.50 )",
            boxshadow:' 0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
            backdropfilter:"blur( 8px )",
            webkitbackdropfilter: "blur( 10px )",
            borderradius: '10px',
            border: "1px solid rgba( 255, 255, 255, 0.18 )",
          }}
        >
          {/* Formulário */}
          <Box
            as="form"
            styleSheet={{
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
              width: { xs: '100%', sm: '50%' }, textAlign: 'center', marginBottom: '32px',
            }}
          >
            <Titulo tag="h2">Boas vindas de volta!</Titulo>
            <Text variant="body3" styleSheet={{ marginBottom: '32px', color: appConfig.theme.colors.neutrals[300] }}>
              {appConfig.name}
            </Text>

            <TextField
              fullWidth
              textFieldColors={{
                neutral: {
                  textColor: appConfig.theme.colors.neutrals[200],
                  mainColor: appConfig.theme.colors.neutrals[900],
                  mainColorHighlight: appConfig.theme.colors.primary[500],
                  backgroundColor: appConfig.theme.colors.neutrals[800],
                },
              }}
            />
            <Button
              type='submit'
              label='Entrar'
              fullWidth
              buttonColors={{
                contrastColor: appConfig.theme.colors.neutrals["000"],
                mainColor: appConfig.theme.colors.primary[500],
                mainColorLight: appConfig.theme.colors.primary[400],
                mainColorStrong: appConfig.theme.colors.primary[600],
              }}
            />
          </Box>
          {/* Formulário */}


          {/* Photo Area */}
          <Box
            styleSheet={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              maxWidth: '200px',
              padding: '16px',
              backgroundColor: appConfig.theme.colors.neutrals[800],
              border: '1px solid',
              borderColor: appConfig.theme.colors.neutrals[999],
              borderRadius: '10px',
              flex: 1,
              minHeight: '240px',
            }}
          >
            <Image
              styleSheet={{
                borderRadius: '50%',
                marginBottom: '16px',
              }}
              src={`https://github.com/${username}.png`}
            />
            <Text
              variant="body4"
              styleSheet={{
                color: appConfig.theme.colors.neutrals[200],
                backgroundColor: appConfig.theme.colors.neutrals[900],
                padding: '3px 10px',
                borderRadius: '1000px'
              }}
            >
              {username}
            </Text>
          </Box>
          {/* Photo Area */}
        </Box>
      </Box>
    </>
  );
}