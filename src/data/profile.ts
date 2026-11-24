// ===== Edit these lists to update the Home and Certificates pages =====

export const skills = [
  { icon: 'network', color: 'blue', title: 'Networking', text: 'VLANs, switching, fiber uplinks, ISP redundancy, troubleshooting with switch teams.' },
  { icon: 'monitor', color: 'teal', title: 'Endpoints & M365', text: 'Windows endpoints, device lifecycle, asset management, Microsoft 365 support.' },
  { icon: 'server', color: 'violet', title: 'Servers & data', text: 'Windows file servers, share/NTFS permissions, cross-site sync, SQL Server admin.' },
  { icon: 'cloud', color: 'orange', title: 'Cloud (learning)', text: 'Microsoft Azure administration — identity, VNets, VMs, storage, backup.' },
  { icon: 'terminal', color: 'pink', title: 'Automation', text: 'PowerShell and Robocopy scripting; growing into Python and AI-assisted ops.' },
  { icon: 'briefcase', color: 'green', title: 'Site operations', text: 'Single-engineer coverage of 3 sites, vendor coordination, budgets and reporting.' },
];

export const experience = [
  {
    role: 'On-site IT Engineer',
    org: 'Emerson (via Teceze / Infosys)',
    when: 'Nov 2025 – present · Busan',
    text: 'Single engineer covering three sites in Korea: endpoints, network, servers, assets and vendors.',
  },
  {
    role: 'IT Support / Field Engineer',
    org: 'Baxter Korea · Novartis (WIPRO) · GE Healthcare Korea',
    when: 'Before 2025 · Seoul',
    text: 'Enterprise end-user and field IT support in regulated healthcare and pharma environments.',
  },
];

export const education = [
  { title: "Master's in International Business (MIB)", org: 'Namseoul University', when: '2026' },
  { title: "Bachelor's in Information Technology", org: 'INHA University', when: '' },
];

// status: 'Done' | 'In progress' | 'Planned'   progress: 0–100 (only shown when In progress)
export const certificates = [
  { name: 'Microsoft Azure Administrator (AZ-104)', issuer: 'Microsoft', status: 'In progress', progress: 10, icon: 'cloud', color: 'blue', note: 'Main goal for 2027 Q1' },
  { name: 'Cisco CCNA (200-301)', issuer: 'Cisco', status: 'In progress', progress: 50, icon: 'network', color: 'teal', note: 'Half of the course done' },
  { name: 'ITIL 4 Foundation', issuer: 'PeopleCert / Axelos', status: 'Planned', progress: 0, icon: 'book', color: 'violet', note: 'IT service management' },
  { name: 'Microsoft 365 Endpoint Administrator (MD-102)', issuer: 'Microsoft', status: 'Planned', progress: 0, icon: 'monitor', color: 'orange', note: 'Intune & Windows' },
  { name: 'Microsoft 365 Copilot & Agent Administration (AB-900)', issuer: 'Microsoft', status: 'Planned', progress: 0, icon: 'bot', color: 'pink', note: 'AI administration' },
];
