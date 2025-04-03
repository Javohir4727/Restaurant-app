import React from "react";
import BlackBackground from "components/BlackBackground";
import GTASection from "components/GTASection/GTASection";
import Footer from "components/Footer/Footer";
import { Box } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Img from "../../media/Image (10).jpg";
import IMG from "../../media/Image (9).jpg";

type Props = {};

const TAX_RATE = 0.01;

function ccyFormat(num: number) {
  return `${num.toFixed(2)}`;
}

function priceRow(qty: number, subtotal: number) {
  return qty * subtotal;
}

function createRow(
  img: string,
  product: string,
  qty: number,
  subtotal: number
) {
  const price = priceRow(qty, subtotal);
  return { img, product, qty, subtotal, price };
}

interface Row {
  img: string;
  product: string;
  qty: number;
  subtotal: number;
  price: number;
}

function subtotal(items: readonly Row[]) {
  return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
}

const rows = [
  createRow(IMG, "Paperclips (Box)", 100, 1.15),
  createRow(Img, "Paper (Case)", 10, 45.99),
  createRow(Img, "Waste Basket", 2, 17.99),
];

const invoiceSubtotal = subtotal(rows);
const invoiceTaxes = TAX_RATE * invoiceSubtotal;
const invoiceTotal = invoiceTaxes + invoiceSubtotal;

function Cart({}: Props) {
  return (
    <>
      <BlackBackground title="Cart" />
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="spanning table">
            <TableHead>
              <TableRow>
                <TableCell>Image</TableCell>
                <TableCell>Product</TableCell>
                <TableCell align="right">Price</TableCell>
                <TableCell align="right">Qty</TableCell>
                <TableCell align="right">Subtotal</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <img
                      src={row.img}
                      alt={row.product}
                      width="50"
                      height="50"
                    />
                  </TableCell>
                  <TableCell>{row.product}</TableCell>
                  <TableCell align="right">{row.subtotal}</TableCell>
                  <TableCell align="right">{row.qty}</TableCell>
                  <TableCell align="right">{ccyFormat(row.price)}</TableCell>
                </TableRow>
              ))}
              <TableRow>
                <TableCell rowSpan={3} />
                <TableCell colSpan={2}>Subtotal</TableCell>
                <TableCell align="right">
                  {ccyFormat(invoiceSubtotal)}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Tax</TableCell>
                <TableCell align="right">{`${(TAX_RATE * 100).toFixed(
                  0
                )} %`}</TableCell>
                <TableCell align="right">{ccyFormat(invoiceTaxes)}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell colSpan={2}>Total</TableCell>
                <TableCell align="right">{ccyFormat(invoiceTotal)}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <GTASection />
      <Footer />
    </>
  );
}

export default Cart;
