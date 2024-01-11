import { Sidebar } from '../types/layout'
import { PATH } from './path'

const EKLAIM: Sidebar[] = [
  {
    isParent: false,
    ishavechild: false,
    title: 'Verifikasi',
    icon: 'tabler:list-details',
    path: PATH.EKLAIM.VERIFICATION,
    children: []
  }
]

const PHARMACY: Sidebar[] = [
  {
    isParent: false,
    ishavechild: false,
    title: 'SO Farmasi',
    icon: 'tabler:building-warehouse',
    path: PATH.PHARMACY.STOCKOPNAME,
    children: []
  }
]

const FINANCE: Sidebar[] = [
  {
    isParent: false,
    ishavechild: false,
    title: 'Honor Karyawan',
    icon: 'tabler:coins',
    path: PATH.FINANCE.PAYROLL,
    children: []
  }
]

export const SIDEBAR_ITEMS: Sidebar[] = [
  {
    isParent: true,
    ishavechild: true,
    title: 'E-Klaim',
    icon: 'tabler:shield',
    path: '',
    children: EKLAIM
  },
  {
    isParent: true,
    ishavechild: true,
    title: 'Farmasi',
    icon: 'tabler:pill',
    path: '',
    children: PHARMACY
  },
  {
    isParent: true,
    ishavechild: true,
    title: 'Keuangan',
    icon: 'tabler:coins',
    path: '',
    children: FINANCE
  }
]
