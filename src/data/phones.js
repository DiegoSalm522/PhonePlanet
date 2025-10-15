import { applePhones } from './apple';
import { honorPhones } from './honor';
import { huaweiPhones } from './huawei';
import { motorolaPhones } from './motorola';
import { oppoPhones } from './oppo';
import { samsungPhones } from './samsung';
import { xiaomiPhones } from './xiaomi';
import { ztePhones } from './zte';

const allPhones = [
  ...applePhones,
  ...honorPhones,
  ...huaweiPhones,
  ...motorolaPhones,
  ...oppoPhones,
  ...samsungPhones,
  ...xiaomiPhones,
  ...ztePhones,
];

export const phones = allPhones.map((phone, index) => ({
  ...phone,
  id: index + 1,
}));

export {
  applePhones,
  honorPhones,
  huaweiPhones,
  motorolaPhones,
  oppoPhones,
  samsungPhones,
  xiaomiPhones,
  ztePhones,
};

export const getPhonesByBrand = (brand) => {
  return phones.filter(phone => phone.brand === brand);
};

export const getPhoneById = (id) => {
  return phones.find(phone => phone.id === id);
};

export const brands = ["Apple", "HONOR", "HUAWEI", "Motorola", "OPPO", "Samsung", "Xiaomi", "ZTE"];