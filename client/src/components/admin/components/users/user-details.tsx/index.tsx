import { UserDto } from "@/dtos/user/user";
import { Card, CardContent, Typography } from "@mui/material";

interface UserDetailsProps {
  user: UserDto;
}
export default function UserDetails({ user }: UserDetailsProps) {
  return (
    <>
      <Card
        key={user.id}
        sx={{ margin: "20px", width: "300px", borderRadius: "15px" }}
      >
        <CardContent>
          <Typography variant="h5" component="div">
            {user.firstName} {user.lastName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Email: {user.email}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Role: {user.role}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Username: {user.username}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Location: {user.location}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Phone: {user.phone}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}
