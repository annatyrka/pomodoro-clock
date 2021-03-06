import React from 'react';
import { Typography, IconButton, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';

const useStyles = makeStyles({
    root: {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        justifyItems: 'center',
        alignItems: 'center',
        marginTop: 15,
        marginBottom:15,
    },
    label: {
        gridColumn:'1 / span 3',
        textTransform: 'uppercase',
        fontWeight: 100,
        textAlign: 'center',
        whiteSpace: 'nowrap',
        '@media (max-width: 350px)' : {
            whiteSpace: 'normal'
          }
    }
})

export default function PhaseControl( {phase, session, length, onArrowUp, onArrowDown }) {

    const bgColor = phase === 'break' ? 'success' : 'secondary';
    const classes = useStyles();
    const handleArrowDown = () => {
        onArrowDown();
    }

    const handleArrowUp = () => {
        onArrowUp();
    }

    return(
        <Box className={classes.root}>
            <Typography variant="h6" className={classes.label} id={`${session}-label`}  >
                {session} length
            </Typography>
            <IconButton
                id={`${session}-decrement`}
                onClick={handleArrowDown}
             
            >
                <ArrowDownwardOutlinedIcon fontSize="large" color={bgColor}/>
            </IconButton>
            <Typography variant="h6" id={`${session}-length`}>
                {length}
            </Typography>

            <IconButton
                id={`${session}-increment`}
                onClick={handleArrowUp}
            >
                <ArrowUpwardOutlinedIcon fontSize="large" color={bgColor}/>
            </IconButton>

        </Box>
    )
}