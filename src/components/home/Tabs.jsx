import React, { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';

const defaultInventory = [
    { id: 'RX-8902', name: 'Sodium Chloride 0.9%', loc: 'Rm 402 • Cab B', status: 'In Stock', qty: '15 L', color: 'teal', icon: null },
    { id: 'AB-1145', name: 'Taq Polymerase', loc: 'Frz -80°C • R2', status: 'Low Stock', qty: '2 U', color: 'amber', icon: 'solar:snowflake-linear' },
    { id: 'CH-9921', name: 'Methanol, HPLC Grade', loc: 'Flam Cab 1', status: 'In Stock', qty: '4 L', color: 'teal', icon: null },
    { id: 'RS-0054', name: 'Fetal Bovine Serum', loc: 'Frz -20°C', status: 'Depleted', qty: '0 ml', color: 'rose', icon: null, strike: true },
    { id: 'DX-1142', name: 'Dimethyl Sulfoxide (DMSO)', loc: 'Chem Rm 2 • C1', status: 'In Stock', qty: '2.5 L', color: 'teal', icon: null },
    { id: 'PR-3341', name: 'Proteinase K', loc: 'Frz -20°C • Box 4', status: 'Low Stock', qty: '0.5 ml', color: 'amber', icon: 'solar:snowflake-linear' },
    { id: 'LB-9021', name: 'Luria Broth Base', loc: 'Prep Rm • Shelf 3', status: 'In Stock', qty: '5 kg', color: 'teal', icon: null },
    { id: 'EX-5542', name: 'Ethidium Bromide', loc: 'Hazmat • Cab 4', status: 'Depleted', qty: '0 ml', color: 'rose', icon: 'solar:danger-triangle-linear', strike: true },
];

const Tabs = ({ activeTab }) => {
    // State management for inventory array
    const [inventory, setInventory] = useState(() => {
        const saved = localStorage.getItem('nexus_inventory');
        if (saved) {
            try {
                return JSON.parse(saved);
            } catch (e) {
                return defaultInventory;
            }
        }
        return defaultInventory;
    });

    const [searchQuery, setSearchQuery] = useState('');

    // Save to localStorage when inventory changes
    useEffect(() => {
        localStorage.setItem('nexus_inventory', JSON.stringify(inventory));
    }, [inventory]);

    const handleDelete = (e, id) => {
        e.stopPropagation(); // prevent row click
        setInventory(prev => prev.filter(item => item.id !== id));
    };

    // Derived State
    const filteredInventory = inventory.filter(item =>
        item.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const totalItems = inventory.length;
    const lowStockCount = inventory.filter(item => item.status === 'Low Stock').length;
    const depletedCount = inventory.filter(item => item.status === 'Depleted').length;

    return (
        <>
            {/* TAB 1: TRACK */}
            {activeTab === 'trace' && (
                <div className="tab-content grid md:grid-cols-3 gap-6 h-full absolute inset-0">
                    <div className="bg-white/[0.03] border border-white/5 rounded-[2.5rem] p-8 flex flex-col justify-between hover:bg-white/[0.06] transition-colors duration-500 group relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/20 blur-[60px] rounded-full group-hover:bg-teal-500/30 transition-all"></div>
                        <div className="relative z-10">
                            <div className="flex justify-between items-start mb-4">
                                <Icon icon="solar:flask-linear" className="text-white/40 text-[32px]" />
                                <span className="text-xs font-mono text-teal-300 bg-teal-500/10 px-2 py-1 rounded border border-teal-500/20">CORE</span>
                            </div>
                            <div className="text-lg text-white/80 font-normal mb-1">Reagents & Chemicals</div>
                            <p className="text-white/40 text-sm font-thin leading-relaxed">Real-time stock levels, automated low-stock alerts, and expiration tracking.</p>
                        </div>
                        <div className="text-6xl lg:text-7xl text-white font-thin stat-value mt-2 group-hover:text-teal-200 transition-colors">99<span className="text-3xl text-white/30 ml-1">%</span></div>
                    </div>
                    <div className="bg-white/[0.03] border border-white/5 rounded-[2.5rem] p-8 flex flex-col justify-between hover:bg-white/[0.06] transition-colors duration-500 group relative overflow-hidden">
                        <div className="absolute bottom-0 left-0 w-32 h-32 bg-indigo-500/20 blur-[60px] rounded-full group-hover:bg-indigo-500/30 transition-all"></div>
                        <div className="relative z-10">
                            <div className="flex justify-between items-start mb-4">
                                <Icon icon="solar:scanner-linear" className="text-white/40 text-[32px]" />
                                <span className="text-xs font-mono text-indigo-300 bg-indigo-500/10 px-2 py-1 rounded border border-indigo-500/20">SYNC</span>
                            </div>
                            <div className="text-lg text-white/80 font-normal mb-1">Equipment Logs</div>
                            <p className="text-white/40 text-sm font-thin leading-relaxed">Manage maintenance schedules, calibration records, and usage history.</p>
                        </div>
                        <div className="text-6xl lg:text-7xl text-white font-thin stat-value mt-2 group-hover:text-indigo-200 transition-colors">24<span className="text-3xl text-white/30 ml-1">/7</span></div>
                    </div>
                    <div className="bg-white/[0.03] border border-white/5 rounded-[2.5rem] p-8 flex flex-col justify-between hover:bg-white/[0.06] transition-colors duration-500 group relative overflow-hidden">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-blue-500/20 blur-[60px] rounded-full group-hover:bg-blue-500/30 transition-all"></div>
                        <div className="relative z-10">
                            <div className="flex justify-between items-start mb-4">
                                <Icon icon="solar:map-point-linear" className="text-white/40 text-[32px]" />
                                <span className="text-xs font-mono text-blue-300 bg-blue-500/10 px-2 py-1 rounded border border-blue-500/20">MAP</span>
                            </div>
                            <div className="text-lg text-white/80 font-normal mb-1">Sample Locations</div>
                            <p className="text-white/40 text-sm font-thin leading-relaxed">Visual freezer mapping. Pinpoint exact sample locations down to the well.</p>
                        </div>
                        <div className="text-6xl lg:text-7xl text-white font-thin stat-value mt-2 group-hover:text-blue-200 transition-colors">3D<span className="text-3xl text-white/30 ml-1">Grid</span></div>
                    </div>
                </div>
            )}

            {/* TAB 2: AUDIT */}
            {activeTab === 'evals' && (
                <div className="tab-content grid md:grid-cols-3 gap-6 h-full absolute inset-0">
                    <div className="bg-white/[0.03] border border-white/5 rounded-[2.5rem] p-8 flex flex-col justify-between hover:bg-white/[0.06] transition-colors duration-500 group relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/20 blur-[60px] rounded-full group-hover:bg-amber-500/30 transition-all"></div>
                        <div className="relative z-10">
                            <div className="flex justify-between items-start mb-4">
                                <Icon icon="solar:history-linear" className="text-white/40 text-[32px]" />
                                <span className="text-xs font-mono text-amber-300 bg-amber-500/10 px-2 py-1 rounded border border-amber-500/20">LOGS</span>
                            </div>
                            <div className="text-lg text-white/80 font-normal mb-1">Chain of Custody</div>
                            <p className="text-white/40 text-sm font-thin leading-relaxed">Immutable logs of every transaction, transfer, and consumption event.</p>
                        </div>
                        <div className="text-6xl lg:text-7xl text-white font-thin stat-value mt-2 group-hover:text-amber-200 transition-colors">All<span className="text-3xl text-white/30 ml-1">Tx</span></div>
                    </div>
                    <div className="bg-white/[0.03] border border-white/5 rounded-[2.5rem] p-8 flex flex-col justify-between hover:bg-white/[0.06] transition-colors duration-500 group relative overflow-hidden">
                        <div className="absolute bottom-0 left-0 w-32 h-32 bg-rose-500/20 blur-[60px] rounded-full group-hover:bg-rose-500/30 transition-all"></div>
                        <div className="relative z-10">
                            <div className="flex justify-between items-start mb-4">
                                <Icon icon="solar:document-text-linear" className="text-white/40 text-[32px]" />
                                <span className="text-xs font-mono text-rose-300 bg-rose-500/10 px-2 py-1 rounded border border-rose-500/20">SIG</span>
                            </div>
                            <div className="text-lg text-white/80 font-normal mb-1">E-Signatures</div>
                            <p className="text-white/40 text-sm font-thin leading-relaxed">Fully compliant electronic signature workflows for protocol approvals.</p>
                        </div>
                        <div className="text-6xl lg:text-7xl text-white font-thin stat-value mt-2 group-hover:text-rose-200 transition-colors">CFR<span className="text-3xl text-white/30 ml-1">11</span></div>
                    </div>
                    <div className="bg-white/[0.03] border border-white/5 rounded-[2.5rem] p-8 flex flex-col justify-between hover:bg-white/[0.06] transition-colors duration-500 group relative overflow-hidden">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-purple-500/20 blur-[60px] rounded-full group-hover:bg-purple-500/30 transition-all"></div>
                        <div className="relative z-10">
                            <div className="flex justify-between items-start mb-4">
                                <Icon icon="solar:shield-warning-linear" className="text-white/40 text-[32px]" />
                                <span className="text-xs font-mono text-purple-300 bg-purple-500/10 px-2 py-1 rounded border border-purple-500/20">QA</span>
                            </div>
                            <div className="text-lg text-white/80 font-normal mb-1">Quality Control</div>
                            <p className="text-white/40 text-sm font-thin leading-relaxed">Track lot numbers, certificates of analysis, and vendor performance.</p>
                        </div>
                        <div className="text-6xl lg:text-7xl text-white font-thin stat-value mt-2 group-hover:text-purple-200 transition-colors">QC<span className="text-3xl text-white/30 ml-1">Pass</span></div>
                    </div>
                </div>
            )}

            {/* TAB 3: DASHBOARD */}
            {activeTab === 'demo' && (
                <div className="tab-content w-full h-full absolute inset-0">
                    <div className="w-full h-full bg-[#0a0a0e]/90 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-4 sm:p-6 lg:p-8 relative overflow-hidden flex flex-col shadow-2xl">
                        {/* Dash Header */}
                        <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center gap-4 mb-6 z-10 relative">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-white/5 rounded-lg border border-white/10">
                                    <Icon icon="solar:database-linear" className="text-teal-400 text-xl" />
                                </div>
                                <h3 className="text-white font-normal text-xl tracking-tight">Main Inventory</h3>
                            </div>

                            <div className="flex items-center gap-2 sm:gap-4 w-full sm:w-auto">
                                <div className="hidden md:flex items-center gap-2 px-3 py-1.5 bg-black/40 border border-white/10 rounded-lg cursor-pointer hover:bg-white/5 transition-colors shrink-0">
                                    <span className="text-sm text-white/70">Category: All</span>
                                    <Icon icon="solar:alt-arrow-down-linear" className="text-white/40" />
                                </div>

                                <div className="relative group">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <Icon icon="solar:magnifer-linear" className="text-white/40" />
                                    </div>
                                    <input
                                        type="text"
                                        placeholder="Search ID, Name..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className="bg-black/40 border border-white/10 text-white text-sm rounded-lg focus:ring-1 focus:ring-teal-500/50 focus:border-teal-500/50 block w-full pl-9 p-1.5 placeholder-white/30 transition-all outline-none"
                                    />
                                </div>

                                <button
                                    className="bg-teal-600/90 hover:bg-teal-500 text-white px-3 py-1.5 rounded-lg text-sm transition-all flex items-center justify-center gap-2 shadow-lg shadow-teal-500/20 shrink-0"
                                    onClick={() => {
                                        const newItem = {
                                            id: `NEW-${Math.floor(Math.random() * 10000)}`,
                                            name: 'New Custom Reagent',
                                            loc: 'Rm 101',
                                            status: 'In Stock',
                                            qty: '100 ml',
                                            color: 'teal',
                                            icon: null
                                        };
                                        setInventory([newItem, ...inventory]);
                                    }}
                                >
                                    <Icon icon="solar:add-square-linear" /> <span className="hidden sm:inline">Add Item</span>
                                </button>
                            </div>
                        </div>

                        {/* Dash Stats Row */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-4 sm:mb-6 relative z-10">
                            <div className="glass-card rounded-xl p-3 sm:p-4 flex items-center justify-between">
                                <div>
                                    <p className="text-xs text-white/50 mb-1">Total Items</p>
                                    <p className="text-xl font-normal text-white">{totalItems}</p>
                                </div>
                                <Icon icon="solar:box-minimalistic-linear" className="text-white/20 text-[28px]" />
                            </div>
                            <div className="glass-card rounded-xl p-4 flex items-center justify-between">
                                <div>
                                    <p className="text-xs text-white/50 mb-1">Low Stock</p>
                                    <p className="text-xl font-normal text-amber-400">{lowStockCount}</p>
                                </div>
                                <Icon icon="solar:danger-triangle-linear" className="text-amber-400/20 text-[28px]" />
                            </div>
                            <div className="glass-card rounded-xl p-4 flex items-center justify-between">
                                <div>
                                    <p className="text-xs text-white/50 mb-1">Depleted</p>
                                    <p className="text-xl font-normal text-rose-400">{depletedCount}</p>
                                </div>
                                <Icon icon="solar:calendar-date-linear" className="text-rose-400/20 text-[28px]" />
                            </div>
                        </div>

                        {/* Dash Table Area */}
                        <div className="flex-grow border border-white/10 rounded-xl bg-black/20 flex flex-col relative z-10 overflow-hidden">
                            <div className="overflow-x-auto no-scrollbar flex-grow flex flex-col">
                                <div className="min-w-[600px] flex-grow flex flex-col">
                                    <div className="grid grid-cols-12 gap-4 px-4 py-3 border-b border-white/10 bg-white/[0.02] text-xs text-white/50 font-medium shrink-0">
                                        <div className="col-span-1 flex items-center"><input type="checkbox" className="custom-checkbox" /></div>
                                        <div className="col-span-2">Item ID</div>
                                        <div className="col-span-4">Description</div>
                                        <div className="col-span-2">Location</div>
                                        <div className="col-span-2">Status</div>
                                        <div className="col-span-1 text-right">Qty</div>
                                    </div>
                                    <div className="overflow-y-auto no-scrollbar flex-grow text-sm text-white/80 pb-16">
                                        {filteredInventory.length === 0 ? (
                                            <div className="p-8 text-center text-white/40">No items found matching your search.</div>
                                        ) : (
                                            filteredInventory.map((item, i) => (
                                                <div key={item.id} className={`dash-row group grid grid-cols-12 gap-4 px-4 py-3 border-b border-white/5 items-center cursor-pointer relative ${item.strike ? 'opacity-60' : ''}`}>
                                                    <div className="col-span-1"><input type="checkbox" className="custom-checkbox" /></div>
                                                    <div className="col-span-2 font-mono text-xs text-white/60">{item.id}</div>
                                                    <div className={`col-span-4 font-normal flex items-center gap-2 ${item.strike ? 'text-white/50 line-through decoration-white/20' : ''}`}>
                                                        {item.name} {item.icon && <Icon icon={item.icon} className="text-blue-300" />}

                                                        {/* Delete Action (visible on hover) */}
                                                        <button
                                                            className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity bg-rose-500/20 text-rose-400 hover:bg-rose-500 hover:text-white p-1.5 rounded-md flex items-center justify-center mr-2"
                                                            onClick={(e) => handleDelete(e, item.id)}
                                                            title="Delete Record"
                                                        >
                                                            <Icon icon="solar:trash-bin-trash-linear" />
                                                        </button>
                                                    </div>
                                                    <div className={`col-span-2 text-xs ${item.strike ? 'text-white/40' : ''}`}>{item.loc}</div>
                                                    <div className="col-span-2">
                                                        <span className={`px-2 py-0.5 rounded bg-${item.color}-500/10 border border-${item.color}-500/20 text-${item.color}-400 text-xs`}>
                                                            {item.status}
                                                        </span>
                                                    </div>
                                                    <div className={`col-span-1 text-right font-mono ${item.strike ? 'text-white/40' : ''}`}>{item.qty}</div>
                                                </div>
                                            ))
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-[#0a0a0e] via-[#0a0a0e]/95 to-transparent flex justify-between items-center border-t border-white/5 z-20">
                                <div className="flex items-center gap-3">
                                    <span className="text-xs text-white/50">Compact View</span>
                                    <input type="checkbox" className="custom-toggle" defaultChecked />
                                </div>
                                <button
                                    className="text-xs font-mono text-rose-400 hover:text-rose-300 transition-colors uppercase tracking-widest border border-rose-500/30 bg-rose-500/10 px-3 py-1 rounded"
                                    onClick={() => {
                                        setInventory([]);
                                        localStorage.removeItem('nexus_inventory');
                                    }}
                                >
                                    Clear All
                                </button>
                            </div>

                            <div className="absolute bottom-0 right-0 w-64 h-64 bg-teal-500/10 blur-[80px] pointer-events-none z-0"></div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Tabs;

