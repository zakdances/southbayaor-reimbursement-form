import { AccountCircleOutlined, AttachMoneyOutlined, MailOutlined, Menu } from "@mui/icons-material";
import { Box, Button, CardHeader, IconButton, Paper, Stack, Toolbar, Typography } from "@mui/material";
import NumberAvatar from "./NumberAvatar";

const FormCardHeader = (props: any) => {
    const { title="title goes here", avatarIcon="1" } = props;

    return (
        <Paper sx={{borderRadius: 0}}>
        <Toolbar>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <Menu />
          </IconButton> */}

          <NumberAvatar>
            {avatarIcon}
          </NumberAvatar>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {title}
          </Typography>
          {/* <Button color="inherit">Login</Button> */}
        </Toolbar>
        </Paper>
    )
}

export default FormCardHeader;