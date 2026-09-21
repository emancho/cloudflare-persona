import * as React from 'react';
import { Box, styled } from '@mui/material';
//import SkipNextIcon from '@mui/icons-material/SkipNext';
import ForwardIcon from '@mui/icons-material/Forward';

/**
 * RetroTV
 * A decorative MUI component styled after a 1970s wood-console television.
 * Drop any content into it via `children` — it renders inside the "screen".
 *
 * Props:
 *  - children: content to show on the screen (defaults to a test pattern)
 *  - channel: controlled channel number. Omit to let the TV manage its own
 *        channel state internally, changed by clicking the dial.
 *  - defaultChannel: initial channel when uncontrolled (default 4)
 *  - onChannelChange: called with the new channel whenever the dial is clicked
 *  - minChannel / maxChannel: range the dial cycles through, wrapping at the ends
 *        (defaults 2 and 13)
 *  - on: controlled power state (boolean). Omit to let the TV manage its own
 *        state internally, toggled by clicking the power button.
 *  - defaultOn: initial power state when uncontrolled (default true)
 *  - onToggle: called with the new on/off value whenever the power button is clicked
 *  - width: cabinet width in px (default 420)
 */

const Cabinet = styled(Box)(({ theme, $width }) => ({
  position: 'relative',
  width: $width,
  maxWidth: '100%',
  padding: '22px 22px 30px',
  borderRadius: 22,
  background: `
    linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(0,0,0,0.12) 100%),
    repeating-linear-gradient(100deg,
      #7a4a2a 0px, #6b3f24 3px, #7d4d2c 7px, #63391f 10px, #7a4a2a 14px)
  `,
  boxShadow: `
    0 1px 0 rgba(255,255,255,0.15) inset,
    0 -6px 0 rgba(0,0,0,0.25) inset,
    0 18px 30px rgba(0,0,0,0.35),
    0 2px 0 rgba(0,0,0,0.4)
  `,
  border: '1px solid #3f2414',
  fontFamily: '"Helvetica Neue", Arial, sans-serif',
  // little tapered feet
  '&::before, &::after': {
    content: '""',
    position: 'absolute',
    bottom: -14,
    width: 14,
    height: 16,
    background: 'linear-gradient(180deg, #5a3620, #2e1c10)',
    borderRadius: '0 0 4px 4px',
  },
  '&::before': { left: 26 },
  '&::after': { right: 26 },
}));

const Row = styled(Box)({
  display: 'flex',
  gap: 18,
  alignItems: 'stretch',
});

const ScreenBezel = styled(Box)({
  flex: '1 1 auto',
  borderRadius: '48% / 38%',
  padding: 14,
  background: 'linear-gradient(160deg, #efe6d2 0%, #dcd0b4 55%, #cabf9f 100%)',
  boxShadow: `
    0 2px 0 rgba(255,255,255,0.5) inset,
    0 -3px 6px rgba(0,0,0,0.25) inset,
    0 3px 8px rgba(0,0,0,0.35)
  `,
  border: '1px solid #8a7c5c',
});

const Screen = styled(Box)(({ $on }) => ({
  position: 'relative',
  height: 230,
  borderRadius: '44% / 34%',
  overflow: 'hidden',
  background: $on ? '#0d1a14' : '#111',
  boxShadow: '0 0 0 2px #000 inset, 0 0 24px rgba(0,0,0,0.6) inset',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#d7e5d9',
  transition: 'background 0.3s ease',
  // glass curvature highlight
  '&::after': {
    content: '""',
    position: 'absolute',
    inset: 0,
    background: 'radial-gradient(120% 90% at 28% 18%, rgba(255,255,255,0.16) 0%, rgba(255,255,255,0.05) 30%, transparent 55%)',
    pointerEvents: 'none',
  },
  // subtle scanlines
  '&::before': {
    content: '""',
    position: 'absolute',
    inset: 0,
    background: 'repeating-linear-gradient(0deg, rgba(0,0,0,0.18) 0px, rgba(0,0,0,0.18) 1px, transparent 2px, transparent 3px)',
    opacity: $on ? 0.35 : 0.15,
    pointerEvents: 'none',
  },
}));

const TestPattern = () => (
  <Box sx={{ display: 'flex', width: '100%', height: '100%' }}>
    {['#c9c9c9', '#c9b400', '#00b4c9', '#00c95a', '#c9006e', '#c92200', '#0022c9'].map((c) => (
      <Box key={c} sx={{ flex: 1, bgcolor: c }} />
    ))}
  </Box>
);

const Controls = styled(Box)({
  flex: '0 0 84px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '4px 0',
});

const Grille = styled(Box)({
  flex: 1,
  width: '100%',
  borderRadius: 10,
  background:
    'repeating-linear-gradient(90deg, #4a2c18 0px, #4a2c18 2px, #2c1a0e 2px, #2c1a0e 5px)',
  boxShadow: '0 0 0 1px #2a180d inset',
});

// PowerButton replaces the rotary Knob — flat face, power icon, color-coded glow
const PowerButton = styled(Box)(({ $active }) => ({
  width: 34,
  height: 34,
  borderRadius: '50%',
  border: 0,
  padding: 0,
  marginTop: 10,
  cursor: 'pointer',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 15,
  lineHeight: 1,
  color: $active ? '#8fe3a0' : '#7a7368',
  background: $active
    ? 'radial-gradient(circle at 35% 30%, #2f4a35, #1c2e20 70%)'
    : 'radial-gradient(circle at 35% 30%, #3a352c, #221f19 70%)',
  boxShadow: $active
    ? '0 2px 3px rgba(0,0,0,0.5), 0 0 0 2px #3a2716, 0 0 8px 2px rgba(90,220,120,0.55)'
    : '0 2px 3px rgba(0,0,0,0.5), 0 0 0 2px #3a2716, inset 0 1px 2px rgba(0,0,0,0.6)',
  transition: 'background 0.2s ease, box-shadow 0.2s ease, color 0.2s ease, transform 0.15s ease',
  '&:active': { transform: 'scale(0.92)' },
  '&:focus-visible': { outline: '2px solid #fff', outlineOffset: 2 },
}));

// standard "power" glyph — a circle with a break at the top and a vertical tick through it
const PowerIcon = () => (
  <Box
    component="span"
    sx={{
      display: 'block',
      width: 14,
      height: 14,
      position: 'relative',
      '&::before': {
        content: '""',
        position: 'absolute',
        inset: 0,
        borderRadius: '50%',
        border: '1.6px solid currentColor',
        clipPath: 'polygon(0 0, 40% 0, 40% 35%, 60% 35%, 60% 0, 100% 0, 100% 100%, 0 100%)',
      },
      '&::after': {
        content: '""',
        position: 'absolute',
        top: -2,
        left: '50%',
        width: 1.6,
        height: 8,
        background: 'currentColor',
        transform: 'translateX(-50%)',
      },
    }}
  />
);

// Dial is now interactive — click advances to the next channel, wrapping within range
const Dial = styled(Box)({
  marginTop: 10,
  width: 34,
  height: 34,
  borderRadius: '50%',
  border: 0,
  padding: 0,
  background: '#1a1a1a',
  color: '#e8e2d0',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  boxShadow: '0 2px 3px rgba(0,0,0,0.5), 0 0 0 2px #3a2716',
  transition: 'transform 0.15s ease, box-shadow 0.15s ease',
  '& svg': { fontSize: 18 },
  '&:hover': { boxShadow: '0 2px 3px rgba(0,0,0,0.5), 0 0 0 2px #3a2716, 0 0 0 4px rgba(255,255,255,0.08)' },
  '&:active': { transform: 'scale(0.92)' },
  '&:focus-visible': { outline: '2px solid #fff', outlineOffset: 2 },
});

const Nameplate = styled(Box)({
  marginTop: 16,
  textAlign: 'center',
  fontSize: 11,
  letterSpacing: 2,
  color: '#e9dcc0',
  opacity: 0.75,
  textShadow: '0 1px 0 rgba(0,0,0,0.4)',
});

export default function RetroTV({
  children,
  channel,
  defaultChannel = 4,
  onChannelChange,
  minChannel = 2,
  maxChannel = 13,
  on,
  defaultOn = true,
  onToggle,
  width = 420,
}) {
  const [internalOn, setInternalOn] = React.useState(defaultOn);
  const isControlled = on !== undefined;
  const isOn = isControlled ? on : internalOn;

  const [internalChannel, setInternalChannel] = React.useState(defaultChannel);
  const channelIsControlled = channel !== undefined;
  const currentChannel = channelIsControlled ? channel : internalChannel;

  const handleToggle = () => {
    const next = !isOn;
    if (!isControlled) setInternalOn(next);
    onToggle?.(next);
  };

  const handleChannelClick = () => {
    const next = currentChannel >= maxChannel ? minChannel : currentChannel + 1;
    if (!channelIsControlled) setInternalChannel(next);
    onChannelChange?.(next);
  };

  return (
    <Cabinet $width={width}>
      <Row>
        <ScreenBezel>
          <Screen $on={isOn}>
            {isOn ? (children ?? <TestPattern />) : null}
          </Screen>
        </ScreenBezel>

        <Controls>
          <Grille />
          <PowerButton
            component="button"
            type="button"
            $active={isOn}
            onClick={handleToggle}
            aria-label={isOn ? 'Turn TV off' : 'Turn TV on'}
            aria-pressed={isOn}
          >
            <PowerIcon />
          </PowerButton>
          <Dial
            component="button"
            type="button"
            onClick={handleChannelClick}
            aria-label={`Channel ${currentChannel}. Press to skip to the next channel.`}
          >
            <ForwardIcon />
          </Dial>
        </Controls>
      </Row>

      <Nameplate>SUPREME&nbsp;&nbsp;COLOR&nbsp;&nbsp;VISION</Nameplate>
    </Cabinet>
  );
}