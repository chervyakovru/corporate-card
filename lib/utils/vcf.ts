interface VcfData {
  name: string;
  role: string;
  email: string;
  phone: string;
  address: string;
  url: string;
  companyName: string;
}

export function createVcfString({
  name,
  role,
  phone,
  address,
  email,
  url,
  companyName,
}: VcfData) {
  const nName = name.split(" ").join(";");
  return `BEGIN:VCARD
VERSION:2.1
FN;CHARSET=UTF-8:${name}
N;CHARSET=UTF-8:${nName}
TITLE;CHARSET=UTF-8:${role}
TEL;CELL;PREF:${phone}
ADR;WORK;CHARSET=UTF-8:;;${address};;;
EMAIL:${email}
URL:${url}
ORG;CHARSET=UTF-8:${companyName}
END:VCARD`;
}
