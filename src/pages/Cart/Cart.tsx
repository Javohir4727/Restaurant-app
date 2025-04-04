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
import { useCart } from "../../context/cartContext";

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

function Cart() {
  const { cart } = useCart();

  const rows = cart.map((item) =>
    createRow(item.img, item.title, item.quantity, item.price)
  );

  const invoiceSubtotal = subtotal(rows);
  const invoiceTaxes = TAX_RATE * invoiceSubtotal;
  const invoiceTotal = invoiceTaxes + invoiceSubtotal;

  return (
    <>
      <BlackBackground title="Cart" />
      <Box
        sx={{ display: "flex", justifyContent: "center", margin: "40px 0px" }}
      >
        <TableContainer component={Paper} sx={{ width: "1100px" }}>
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
                      width="70"
                      height="70"
                    />
                  </TableCell>
                  <TableCell>{row.product}</TableCell>
                  <TableCell align="right">{ccyFormat(row.subtotal)}</TableCell>
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
