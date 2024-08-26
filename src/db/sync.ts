import "../models";
import { Author } from "../models";
import { sequelizeConection } from "./connect";
export function syncDb() {
  sequelizeConection.sync({ force: true }).then((res) => {
    console.log("Database synced");
    createBulkAuthor();
  });
  function createBulkAuthor() {
    Author.bulkCreate([
      {
        id: "4610dc13-3798-4e45-8a98-97d178eb9776",
        name: "Natsu Kim",
        profileImageUrl:
          "https://s3-alpha-sig.figma.com/img/d214/1dcc/6e1d41cec47b276f00b1030719afdb7f?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ilq2dHiM9BgXHTZhCHultSNE4YR2ctUG9IgcjL6AJ2omQ5z7OFWv6nG2yzX2B9APnIjuOF8A4mUacVUey2DonUEwEgR9860qQhddvrNQKSsc9wlEKjXY2027zkimUriT2btgq2kPTPeZBIQK-X9jQM0dMYg-pdRTlMtAM4-GwvPamjehbGsn3gNoDP4ANRdADy6-5kODIM0NyF3Iz7VfJy7tNGv0uJbnH~Pbv1PZ8p0ptvgTDEfVC275Ha6MnhlUTJkD9T~RF-I8DIiuDO6LlElayuDFvMs2worrTL2PVzo5oQqTrKBzpBA8xbsWzQAuWdS0aC7YUyVolMcqTy2CJw__",
      },
    ]);
  }
}
