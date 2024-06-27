import * as React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Grid,
  TextField,
  Button,
} from "@mui/material";

function Form16() {
  return (
    <Paper
      sx={{
        p: 2,
        m: "auto",
        width: "90%",
        mt: 2,
        border: "2px solid black", // Add border to the Paper component
      }}>
      <Typography variant="h5" align="center" gutterBottom>
        FORM NO. 16
      </Typography>
      <Typography variant="body2" align="center" gutterBottom>
        [See rule 31(1)(a)]
      </Typography>
      <Typography variant="h6" align="center" gutterBottom>
        PART A
      </Typography>
      <Typography variant="body1" gutterBottom>
        Certificate under Section 203 of the Income-tax Act, 1961 for tax
        deducted at source on salary paid to an employee under section 192 or
        pension/interest income of specified senior citizen under section 194P
      </Typography>
      <Grid container spacing={2} mt={2}>
        <Grid item xs={6}>
          <Typography variant="subtitle1" gutterBottom>
            Certificate No.
          </Typography>
          <TextField
            fullWidth
            disabled
            value="XXXXXXX"
            sx={{ border: "1px solid black" }}
          />
        </Grid>
        <Grid item xs={6} align="right">
          <Typography variant="subtitle1" gutterBottom>
            Last updated on
          </Typography>
          <TextField
            fullWidth
            disabled
            value="01/06/2022"
            sx={{ border: "1px solid black" }}
          />
        </Grid>
      </Grid>
      <Grid container spacing={2} mt={2}>
        <Grid item xs={6}>
          <Typography variant="subtitle1" gutterBottom>
            Name and address of the Employer/Specified Bank
          </Typography>
          <TextField
            fullWidth
            disabled
            value="121 Quailty House August Kranti Marg August Kranti,
Bengaluru, 400036,India
+91-999999999
xyz@gmall.com"
            sx={{ border: "1px solid black" }}
          />
        </Grid>
        <Grid item xs={6}>
          <Typography variant="subtitle1" gutterBottom>
            Name and address of the Employee/Specified senior citizen
          </Typography>
          <TextField
            fullWidth
            disabled
            value="158 Victoria Bakery Bldg. Mody Road Fort,
Bengaluru,400001,India"
            sx={{ border: "1px solid black" }}
          />
        </Grid>
      </Grid>
      <Grid container spacing={2} mt={2}>
        <Grid item xs={4}>
          <Typography variant="subtitle1" gutterBottom>
            PAN of the Deductor
          </Typography>
          <TextField
            fullWidth
            disabled
            value="XXXXXXXXXX"
            sx={{ border: "1px solid black" }}
          />
        </Grid>
        <Grid item xs={4}>
          <Typography variant="subtitle1" gutterBottom>
            TAN of the Deductor
          </Typography>
          <TextField
            fullWidth
            disabled
            value="XXXXXXXXX"
            sx={{ border: "1px solid black" }}
          />
        </Grid>
        <Grid item xs={4}>
          <Typography variant="subtitle1" gutterBottom>
            PAN of the Employee/Specified senior citizen
          </Typography>
          <TextField
            fullWidth
            disabled
            value="XXXXXXXXX"
            sx={{ border: "1px solid black" }}
          />
        </Grid>
      </Grid>
      <Grid container spacing={2} mt={2}>
        <Grid item xs={4}>
          <Typography variant="subtitle1" gutterBottom>
            CIT (TDS)
          </Typography>
          <TextField
            fullWidth
            disabled
            value="Sahkar Apt 84 SV Road Malad,
Bengaluru,400064,India"
            sx={{ border: "1px solid black" }}
          />
        </Grid>
        <Grid item xs={4}>
          <Typography variant="subtitle1" gutterBottom>
            Assessment Year
          </Typography>
          <TextField
            fullWidth
            disabled
            value="2022-23"
            sx={{ border: "1px solid black" }}
          />
        </Grid>
        <Grid item xs={4}>
          <Typography variant="subtitle1" gutterBottom>
            Period with the Employer
          </Typography>
          <Grid container spacing={1}>
            <Grid item xs={6}>
              <Typography variant="body2" gutterBottom>
                From
              </Typography>
              <TextField
                fullWidth
                disabled
                value="01-Apr-2021"
                sx={{ border: "1px solid black" }}
              />
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body2" gutterBottom>
                To
              </Typography>
              <TextField
                fullWidth
                disabled
                value="31-Mar-2022"
                sx={{ border: "1px solid black" }}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Typography variant="subtitle1" gutterBottom mt={2}>
        Summary of amount paid/credited and tax deducted at source thereon in
        respect of the employee
      </Typography>
      <TableContainer component={Paper} mt={2} mb={2}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ border: "1px solid black" }}>
                Quarter(s)
              </TableCell>
              <TableCell sx={{ border: "1px solid black" }}>
                Receipt Numbers of original quarterly statements of TDS under
                sub-section (3) of Section 200
              </TableCell>
              <TableCell sx={{ border: "1px solid black" }}>
                Amount paid/credited (Rs.)
              </TableCell>
              <TableCell sx={{ border: "1px solid black" }}>
                Amount of tax deducted (Rs.)
              </TableCell>
              <TableCell sx={{ border: "1px solid black" }}>
                Amount of tax deposited/remitted (Rs.)
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell sx={{ border: "1px solid black" }}>Q1</TableCell>
              <TableCell sx={{ border: "1px solid black" }}>
                XXXXXXXXX
              </TableCell>
              <TableCell sx={{ border: "1px solid black" }}>
                762578.00
              </TableCell>
              <TableCell sx={{ border: "1px solid black" }}>
                158446.00
              </TableCell>
              <TableCell sx={{ border: "1px solid black" }}>
                158446.00
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ border: "1px solid black" }}>Q2</TableCell>
              <TableCell sx={{ border: "1px solid black" }}>
                XXXXXXXXX
              </TableCell>
              <TableCell sx={{ border: "1px solid black" }}>
                571506.00
              </TableCell>
              <TableCell sx={{ border: "1px solid black" }}>99247.00</TableCell>
              <TableCell sx={{ border: "1px solid black" }}>99247.00</TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ border: "1px solid black" }}>Q3</TableCell>
              <TableCell sx={{ border: "1px solid black" }}>
                XXXXXXXXX
              </TableCell>
              <TableCell sx={{ border: "1px solid black" }}>
                592463.00
              </TableCell>
              <TableCell sx={{ border: "1px solid black" }}>
                105051.00
              </TableCell>
              <TableCell sx={{ border: "1px solid black" }}>
                105051.00
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ border: "1px solid black" }}>Q4</TableCell>
              <TableCell sx={{ border: "1px solid black" }}>
                XXXXXXXXX
              </TableCell>
              <TableCell sx={{ border: "1px solid black" }}>
                631436.00
              </TableCell>
              <TableCell sx={{ border: "1px solid black" }}>
                120996.00
              </TableCell>
              <TableCell sx={{ border: "1px solid black" }}>
                120996.00
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ border: "1px solid black" }}>
                Total (Rs.)
              </TableCell>
              <TableCell sx={{ border: "1px solid black" }}></TableCell>
              <TableCell sx={{ border: "1px solid black" }}>
                2557983.00
              </TableCell>
              <TableCell sx={{ border: "1px solid black" }}>
                483740.00
              </TableCell>
              <TableCell sx={{ border: "1px solid black" }}>
                483740.00
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <Typography variant="subtitle1" gutterBottom mt={2}>
        I. DETAILS OF TAX DEDUCTED AND DEPOSITED IN THE CENTRAL GOVERNMENT
        ACCOUNT THROUGH BOOK ADJUSTMENT
      </Typography>
      <Typography variant="body1" gutterBottom>
        (The deductor to provide payment wise details of tax deducted and
        deposited with respect to the deductee)
      </Typography>
      <TableContainer component={Paper} mt={2} mb={2}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ border: "1px solid black" }}>SL. No.</TableCell>
              <TableCell sx={{ border: "1px solid black" }}>
                Tax Deposited in respect of the deductee (Rs.)
              </TableCell>
              <TableCell sx={{ border: "1px solid black" }}>
                Receipt Numbers of Form No. 24G
              </TableCell>
              <TableCell sx={{ border: "1px solid black" }}>
                Book Identification Number (BIN)
              </TableCell>
              <TableCell sx={{ border: "1px solid black" }}>
                DDO serial number in Form no. 24G
              </TableCell>
              <TableCell sx={{ border: "1px solid black" }}>
                Date of transfer voucher (dd/mm/yyyy)
              </TableCell>
              <TableCell sx={{ border: "1px solid black" }}>
                Status of matching with Form no. 24G
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell sx={{ border: "1px solid black" }}>
                Total (Rs.)
              </TableCell>
              <TableCell sx={{ border: "1px solid black" }} />
              <TableCell sx={{ border: "1px solid black" }} />
              <TableCell sx={{ border: "1px solid black" }} />
              <TableCell sx={{ border: "1px solid black" }} />
              <TableCell sx={{ border: "1px solid black" }} />
              <TableCell sx={{ border: "1px solid black" }} />
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <Typography variant="subtitle1" gutterBottom mt={2}>
        II. DETAILS OF TAX DEDUCTED AND DEPOSITED IN THE CENTRAL GOVERNMENT
        ACCOUNT THROUGH CHALLAN
      </Typography>
      <Typography variant="body1" gutterBottom>
        (The deductor to provide payment wise details of tax deducted and
        deposited with respect to the deductee)
      </Typography>
      <TableContainer component={Paper} mt={2} mb={2}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ border: "1px solid black" }}>SL. No.</TableCell>
              <TableCell sx={{ border: "1px solid black" }}>
                Tax Deposited in respect of the deductee (Rs.)
              </TableCell>
              <TableCell sx={{ border: "1px solid black" }}>
                BSR Code of the Bank Branch
              </TableCell>
              <TableCell sx={{ border: "1px solid black" }}>
                Challan Identification Number (CIN)
              </TableCell>
              <TableCell sx={{ border: "1px solid black" }}>
                Date on which Tax deposited (dd/mm/yyyy)
              </TableCell>
              <TableCell sx={{ border: "1px solid black" }}>
                Challan Serial Number
              </TableCell>
              <TableCell sx={{ border: "1px solid black" }}>
                Status of matching with OLTAS*
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell sx={{ border: "1px solid black" }}>1</TableCell>
              <TableCell sx={{ border: "1px solid black" }}>20912.00</TableCell>
              <TableCell sx={{ border: "1px solid black" }}>6390340</TableCell>
              <TableCell sx={{ border: "1px solid black" }} />
              <TableCell sx={{ border: "1px solid black" }}>
                04-05-2021
              </TableCell>
              <TableCell sx={{ border: "1px solid black" }}>04357</TableCell>
              <TableCell sx={{ border: "1px solid black" }}>F</TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ border: "1px solid black" }}>2</TableCell>
              <TableCell sx={{ border: "1px solid black" }}>20912.00</TableCell>
              <TableCell sx={{ border: "1px solid black" }}>6390340</TableCell>
              <TableCell sx={{ border: "1px solid black" }} />
              <TableCell sx={{ border: "1px solid black" }}>
                02-06-2021
              </TableCell>
              <TableCell sx={{ border: "1px solid black" }}>01139</TableCell>
              <TableCell sx={{ border: "1px solid black" }}>F</TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ border: "1px solid black" }}>3</TableCell>
              <TableCell sx={{ border: "1px solid black" }}>
                116622.00
              </TableCell>
              <TableCell sx={{ border: "1px solid black" }}>6390340</TableCell>
              <TableCell sx={{ border: "1px solid black" }} />
              <TableCell sx={{ border: "1px solid black" }}>
                06-07-2021
              </TableCell>
              <TableCell sx={{ border: "1px solid black" }}>07512</TableCell>
              <TableCell sx={{ border: "1px solid black" }}>F</TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ border: "1px solid black" }}>4</TableCell>
              <TableCell sx={{ border: "1px solid black" }}>33164.00</TableCell>
              <TableCell sx={{ border: "1px solid black" }}>6390340</TableCell>
              <TableCell sx={{ border: "1px solid black" }} />
              <TableCell sx={{ border: "1px solid black" }}>
                04-08-2021
              </TableCell>
              <TableCell sx={{ border: "1px solid black" }}>04966</TableCell>
              <TableCell sx={{ border: "1px solid black" }}>F</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <Typography variant="body2" align="right" mt={2} gutterBottom>
        Page 1 of 2
      </Typography>
    </Paper>
  );
}

export default Form16;
