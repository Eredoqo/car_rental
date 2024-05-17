import { useState } from "react";
import {
  Autocomplete,
  Box,
  TextField,
  InputAdornment,
  FormControlLabel,
  Checkbox,
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { LayoutWrapper } from "../../admin-home";
import { useGetUsersSearch } from "@/hooks/useGetUsersSearch";
import { UserDto } from "@/dtos/user/user";
import UserDetails from "./user-details.tsx";

export default function Users() {
  const { users: allUsers } = useGetUsersSearch();
  const users = allUsers?.filter((user) => user.role !== "admin");
  const [inputValue, setInputValue] = useState("");
  const [showAll, setShowAll] = useState(false);
  const [selectedUser, setSelectedUser] = useState<UserDto | null>(null);
  return (
    <LayoutWrapper>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          pr: "90px",
          pb: "30px",
        }}
      >
        <FormControlLabel
          control={
            <Checkbox
              checked={showAll}
              onChange={(event) => setShowAll(event.target.checked)}
            />
          }
          label="Show all users"
        />
        <Autocomplete
          options={showAll || inputValue.length >= 3 ? users || [] : []}
          getOptionLabel={(option) => `${option.firstName} ${option.lastName}`}
          onInputChange={(event, newInputValue) => {
            setInputValue(newInputValue);
          }}
          onChange={(event, newValue) => {
            setSelectedUser(newValue);
          }}
          noOptionsText={false}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Search Users"
              sx={{ width: "300px" }}
              InputProps={{
                ...params.InputProps,
                endAdornment: (
                  <InputAdornment position="end">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          )}
        />
      </Box>
      <Box sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {(showAll ? users : selectedUser ? [selectedUser] : []).map(
          (user) => user && <UserDetails user={user} />
        )}
      </Box>
    </LayoutWrapper>
  );
}
