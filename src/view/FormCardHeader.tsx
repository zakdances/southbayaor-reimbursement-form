import { AccountCircleOutlined, AttachMoneyOutlined, MailOutlined } from "@mui/icons-material";
import { Box, CardHeader, IconButton, Paper, Stack } from "@mui/material";
import NumberAvatar from "./NumberAvatar";

const FormCardHeader = (props: any) => {
    const { title="title goes here", avatarIcon="1" } = props;

    return (
        <Paper 
        elevation={0} 
        
        sx={{
            // borderBottomRightRadius: 35, 
            // width: 450
            borderRadius: 0
        }}>
        <CardHeader
            // avatar={
            //     <Stack direction="row" order={2} alignItems={"center"} gap={2}>
            //   <NumberAvatar>
            //     {avatarIcon}
            //   </NumberAvatar>

              
            //   <NumberAvatar>
            //     <MailOutlined color="info" />
            //   </NumberAvatar>
            //   </Stack>
            // }
            action={
              <IconButton aria-label="settings" disabled>
                <AttachMoneyOutlined />
              </IconButton>
            }
            // title={""}
            title={title}
            titleTypographyProps={{ 
                variant: "h4",
                color: "text.primary",
                // color: "text.secondary"
            }}
            // subheader="* Indicates required field"
            sx={{ 
                // bgcolor: "#fafafa",
                // borderBottomLeftRadius: 0,
                // borderBottomRightRadius: 35,
                // borderBottom: "1px solid #ddd"
                // alignItems: "start",
                // flexDirection: "column",
                // gap: 2,
                // padding: 3
                
            }}
        />
        </Paper>
    )
}

export default FormCardHeader;