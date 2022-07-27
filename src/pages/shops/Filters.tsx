import { Grid, Autocomplete, TextField } from "@mui/material";

const SelectBoxes = () => {
  return (
    <Grid container spacing={2} mb={2} flexWrap="wrap">
      <Grid item lg={3} sm={6} xs={12}>
        <Autocomplete
          disablePortal
          options={apiFloorNo}
          sx={{
            width: "100%",
            "& .MuiOutlinedInput-root": { backgroundColor: "#fff" },
          }}
          fullWidth
          renderInput={(params) => (
            <TextField
              {...params}
              label="Floor No"
              sx={{
                borderRadius: 1,
                boxShadow: (theme) => theme.shadows[3],
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: (theme) => theme.palette.grey[300],
                },
              }}
            />
          )}
        />
      </Grid>
      <Grid item lg={3} sm={6} xs={12}>
        <Autocomplete
          disablePortal
          options={apiShopName}
          sx={{
            width: "100%",
            "& .MuiOutlinedInput-root": { backgroundColor: "#fff" },
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Shop name"
              sx={{
                borderRadius: 1,
                boxShadow: (theme) => theme.shadows[3],
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: (theme) => theme.palette.grey[300],
                },
              }}
            />
          )}
        />
      </Grid>
      <Grid item lg={3} sm={6} xs={12}>
        <Autocomplete
          disablePortal
          options={apiShopType}
          sx={{
            width: "100%",
            "& .MuiOutlinedInput-root": { backgroundColor: "#fff" },
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Shop type"
              sx={{
                borderRadius: 1,
                boxShadow: (theme) => theme.shadows[3],
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: (theme) => theme.palette.grey[300],
                },
              }}
            />
          )}
        />
      </Grid>
      <Grid item lg={3} sm={6} xs={12}>
        <Autocomplete
          disablePortal
          options={ApiReportingdate}
          sx={{
            width: "100%",
            "& .MuiOutlinedInput-root": {
              backgroundColor: "#fff",
            },
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Reporting date"
              sx={{
                borderRadius: 1,
                boxShadow: (theme) => theme.shadows[3],
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: (theme) => theme.palette.grey[300],
                },
              }}
            />
          )}
        />
      </Grid>
    </Grid>
  );
};

export default SelectBoxes;

const apiFloorNo = [
  { label: "Floor 1", text: "Floor 1" },
  { label: "Floor 2", text: "Floor 2" },
  { label: "Floor 3", text: "Floor 3" },
  { label: "Floor 4", text: "Floor 4" },
];
const apiShopName = [
  { label: "THOMAS", text: "THOMAS" },
  { label: "TBs", text: "TBs" },
  { label: "KTK", text: "KTK" },
  { label: "TBs", text: "TBs" },
  { label: "KTK", text: "KTK" },
];
const apiShopType = [
  { label: "Clothes", text: "Clothes" },
  { label: "Cafe", text: "TBs" },
  { label: "Restaurant", text: "Restaurant" },
  { label: "Toys", text: "Toys" },
  { label: "Brands", text: "Brands" },
];
const ApiReportingdate = [
  { label: "2010/5/25", text: "2010/5/25" },
  { label: "2025/7/7", text: "2025/7/7" },
  { label: "2020/2/20", text: "2020/2/20" },
];
