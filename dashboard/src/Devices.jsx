import {useState, useEffect, useMemo} from 'react';
import {useNavigate} from 'react-router-dom';
import {toast} from 'react-hot-toast';
import {useSocket} from "../contexts/SocketContext";
import {useEdition} from "../contexts/EditionContext";
import {
  ComputerDesktopIcon,
  ServerIcon,
  SignalIcon,
  SignalSlashIcon,
  ClockIcon,
  PlusIcon,
  DocumentDuplicateIcon,
  ArrowPathIcon,
  FunnelIcon,
  MagnifyingGlassIcon,
  CommandLineIcon,
  TrashIcon,
  BuildingOfficeIcon,
  ChevronRightIcon,
  ChevronDownIcon,
  CpuChipIcon,
  CircleStackIcon,
  WifiIcon,
  ExclamationTriangleIcon,
  ArrowDownTrayIcon,
  CheckCircleIcon,
  KeyIcon,
  Squares2X2Icon,
  ListBulletIcon,
} from '@heroicons/react/24/outline';
import {CheckCircleIcon as CheckCircleSolidIcon} from '@heroicons/react/24/solid';
import {WindowsIcon, LinuxIcon, AppleIcon} from '../components/icons/OSIcons';
import api from '../services/api';

const PLATFORMS = {
    windows: {name: 'Windows', Icon: WindowsIcon, color: 'text-blue-400'},
    linux: {name: 'Linux', Icon: LinuxIcon, color: 'text-yellow-400'},
    macos: {name: 'macOS', Icon: AppleIcon, color: 'text-gray-400'},
};

const STATUS_STYLES = {
    online:{
        bg: 'bg-green-500/20',
        text: 'text-green-400',
        dot: 'bg-green-500',
        label: 'Online',
    },
    offline: {
        bg: 'bg-red-500/20',
        text: 'text-red-400',
        dot: 'bg-red-500',
        label: 'Offline',
    },
    pending: {
        bg: 'bg-yellow-500/20',
        text: 'text-yellow-400',
        dot: 'bg-yellow-500',
        label: 'Pending',
    },
};

export default function Devices(){
    
}
