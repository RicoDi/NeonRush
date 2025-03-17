'use client';

import { useState, useEffect, useRef } from 'react';

export default function Page() {
    const [winners, setWinners] = useState([
        { name: 'Alex_888', prize: '$1,250' },
        { name: 'NeonQueen', prize: '$3,780' },
        { name: 'RetroGamer', prize: '$950' },
        { name: 'CyberWolf', prize: '$2,100' },
        { name: 'SynthRider', prize: '$4,500' },
    ]);

    const [isSpinning, setIsSpinning] = useState(false);
    const [rouletteResult, setRouletteResult] = useState(null);
    const [selectedBonus, setSelectedBonus] = useState(null);

    const slotRef = useRef(null);
    const rouletteRef = useRef(null);

    // Bonuses data
    const bonuses = [
        { id: 1, name: 'Welcome Pack', description: '200% up to $500 + 50 Free Spins', icon: '🎁' },
        { id: 2, name: 'Daily Boost', description: '50 Free Spins Every Day', icon: '🔄' },
        { id: 3, name: 'Neon Cashback', description: '15% Weekly Cashback on Losses', icon: '💰' },
        { id: 4, name: 'VIP Bonus', description: 'Exclusive Rewards for VIP Members', icon: '👑' },
    ];

    // Roulette prizes
    const roulettePrizes = [
        '100 Free Spins',
        '$50 Bonus',
        '200% Deposit',
        'Mystery Box',
        '$10 Cash',
        '50 Free Spins',
        '$25 Bonus',
        'VIP Points',
    ];

    // Simulate slot machine spin
    const spinSlot = () => {
        if (slotRef.current) {
            slotRef.current.style.animation = 'none';
            setTimeout(() => {
                slotRef.current.style.animation = 'spin3D 3s ease-out forwards';
            }, 10);
        }
    };

    // Simulate roulette spin
    const spinRoulette = () => {
        if (isSpinning) return;

        setIsSpinning(true);
        setRouletteResult(null);

        const randomDegrees = 1800 + Math.floor(Math.random() * 360);
        const selectedIndex = Math.floor((randomDegrees % 360) / (360 / roulettePrizes.length));

        if (rouletteRef.current) {
            rouletteRef.current.style.transform = `rotate(${randomDegrees}deg)`;
        }

        setTimeout(() => {
            setRouletteResult(roulettePrizes[roulettePrizes.length - 1 - selectedIndex]);
            setIsSpinning(false);
        }, 5000);
    };

    // Update winners list periodically
    useEffect(() => {
        const interval = setInterval(() => {
            const newWinner = {
                name: `Player${Math.floor(Math.random() * 1000)}`,
                prize: `$${Math.floor(Math.random() * 10000)}`,
            };
            setWinners((prev) => [newWinner, ...prev.slice(0, 4)]);
        }, 8000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div
            className="min-h-screen bg-gray-900 text-white font-['Orbitron',sans-serif] overflow-x-hidden"
            data-oid="zj0jum."
        >
            {/* Neon background effect */}
            <div
                className="fixed inset-0 bg-[radial-gradient(ellipse_at_center,rgba(54,10,94,0.3),rgba(10,10,30,0.8))] pointer-events-none"
                data-oid="-_dt9ai"
            ></div>

            {/* Navigation */}
            <nav
                className="relative z-10 border-b border-purple-900 bg-black bg-opacity-60 backdrop-blur-sm"
                data-oid="i:ytu12"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="ktdosu5">
                    <div className="flex justify-between h-16" data-oid="un1xeqx">
                        <div className="flex items-center" data-oid="h9cu-15">
                            <div
                                className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 animate-pulse"
                                data-oid="zs7:k7a"
                            >
                                NEON RUSH
                            </div>
                        </div>
                        <div className="flex items-center space-x-8" data-oid="89lf2h_">
                            {['GAMES', 'BONUSES', 'TOURNAMENTS', 'VIP-CLUB'].map((item, index) => (
                                <a
                                    key={index}
                                    href="#"
                                    className="relative px-2 py-1 text-lg font-medium hover:text-cyan-400 transition-colors group"
                                    data-oid="92tu28y"
                                >
                                    {item}
                                    <span
                                        className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-cyan-500 group-hover:w-full transition-all duration-300"
                                        data-oid="2onms8i"
                                    ></span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative py-20 overflow-hidden" data-oid="cyb42wd">
                <div
                    className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center"
                    data-oid=".s2.ett"
                >
                    <div className="lg:w-1/2 mb-12 lg:mb-0" data-oid="t6xpt.c">
                        <h1
                            className="text-5xl md:text-6xl font-bold leading-tight mb-6"
                            data-oid="145r4g2"
                        >
                            <span
                                className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500"
                                data-oid="uzrvxjn"
                            >
                                SPIN THE REELS
                            </span>
                            <span
                                className="block text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]"
                                data-oid="piam07:"
                            >
                                WIN BIG
                            </span>
                        </h1>
                        <p className="text-xl text-purple-200 mb-8 max-w-md" data-oid="6zhmk-g">
                            Experience the ultimate retro gaming thrill with our 80's inspired
                            social casino games!
                        </p>
                        <button
                            onClick={spinSlot}
                            className="px-8 py-4 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full text-xl font-bold uppercase tracking-wider hover:from-pink-500 hover:to-purple-500 transform hover:scale-105 transition-all duration-300 shadow-[0_0_15px_rgba(219,39,119,0.5)]"
                            data-oid="1bmh.bu"
                        >
                            Крутить барабаны!
                        </button>
                    </div>

                    <div className="lg:w-1/2 perspective-1000" data-oid="_ajmgxl">
                        <div
                            ref={slotRef}
                            className="w-64 h-64 md:w-80 md:h-80 mx-auto relative"
                            style={{
                                transformStyle: 'preserve-3d',
                                transform: 'rotateY(0deg) rotateX(10deg)',
                            }}
                            data-oid=":zy:ly:"
                        >
                            {/* 3D Slot Machine */}
                            {[...Array(4)].map((_, index) => (
                                <div
                                    key={index}
                                    className="absolute inset-0 flex items-center justify-center border-4 border-purple-600 rounded-lg bg-gradient-to-b from-gray-800 to-gray-900"
                                    style={{
                                        transform: `rotateY(${index * 90}deg) translateZ(120px)`,
                                        backfaceVisibility: 'hidden',
                                    }}
                                    data-oid="r37w:qu"
                                >
                                    <div className="text-6xl" data-oid="dcezu3a">
                                        {['7️⃣', '🍒', '💎', '🎰'][index]}
                                    </div>
                                    <div
                                        className="absolute inset-0 border-4 border-cyan-500 rounded-lg opacity-20 shadow-[0_0_15px_rgba(34,211,238,0.5)]"
                                        data-oid="h2r8iz2"
                                    ></div>
                                </div>
                            ))}
                            {/* Top and Bottom */}
                            {[0, 1].map((index) => (
                                <div
                                    key={`face-${index}`}
                                    className="absolute inset-0 flex items-center justify-center border-4 border-purple-600 rounded-lg bg-gradient-to-b from-gray-800 to-gray-900"
                                    style={{
                                        transform: `rotateX(${index ? 90 : -90}deg) translateZ(120px)`,
                                        backfaceVisibility: 'hidden',
                                    }}
                                    data-oid="7-hyeof"
                                >
                                    <div className="text-6xl" data-oid="6qgs-jn">
                                        🎮
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Background grid effect */}
                <div
                    className="absolute inset-0 bg-[linear-gradient(rgba(20,20,40,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(20,20,40,0.2)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,rgba(0,0,0,1)_20%,transparent_70%)] pointer-events-none"
                    data-oid="5xyzjcq"
                ></div>
            </section>

            {/* Bonuses Section */}
            <section className="py-16 relative" data-oid="yuw_kd7">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="82f-fhi">
                    <h2
                        className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-500"
                        data-oid="dfev3v5"
                    >
                        EXCLUSIVE BONUSES
                    </h2>

                    <div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                        data-oid="vwno2u0"
                    >
                        {bonuses.map((bonus) => (
                            <div
                                key={bonus.id}
                                onClick={() =>
                                    setSelectedBonus(bonus.id === selectedBonus ? null : bonus.id)
                                }
                                className={`relative overflow-hidden rounded-lg p-6 border-2 cursor-pointer transform transition-all duration-300 hover:scale-105 ${
                                    selectedBonus === bonus.id
                                        ? 'border-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.5)]'
                                        : 'border-purple-800 hover:border-purple-600'
                                }`}
                                data-oid=":mn3:s4"
                            >
                                <div
                                    className="absolute inset-0 bg-gradient-to-br from-purple-900/50 to-black/80 z-0"
                                    data-oid="5z2dk0m"
                                ></div>
                                <div className="relative z-10" data-oid="74txprk">
                                    <div className="text-4xl mb-4" data-oid="z1--3bh">
                                        {bonus.icon}
                                    </div>
                                    <h3
                                        className="text-xl font-bold mb-2 text-cyan-300"
                                        data-oid="9q_4xs-"
                                    >
                                        {bonus.name}
                                    </h3>
                                    <p className="text-purple-200" data-oid="aloq-3y">
                                        {bonus.description}
                                    </p>

                                    <button
                                        className={`mt-4 px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                                            selectedBonus === bonus.id
                                                ? 'bg-cyan-500 text-gray-900'
                                                : 'bg-purple-800 text-white hover:bg-purple-700'
                                        }`}
                                        data-oid="cx2hrer"
                                    >
                                        {selectedBonus === bonus.id ? 'Selected' : 'Select Bonus'}
                                    </button>
                                </div>

                                {/* Animated border effect */}
                                <div
                                    className={`absolute inset-0 ${
                                        selectedBonus === bonus.id ? 'opacity-100' : 'opacity-0'
                                    } transition-opacity duration-300`}
                                    data-oid="h15yail"
                                >
                                    <div
                                        className="absolute inset-0 border-2 border-cyan-400 rounded-lg animate-pulse"
                                        data-oid="41-h98r"
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Cyber Roulette Section */}
            <section className="py-16 relative" data-oid="azbufg6">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="l.ne6:5">
                    <h2
                        className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-500"
                        data-oid="002nzzm"
                    >
                        CYBER ROULETTE
                    </h2>

                    <div className="flex flex-col items-center" data-oid=":8:up-t">
                        <div className="relative w-64 h-64 md:w-80 md:h-80 mb-8" data-oid="87ls_sj">
                            {/* Roulette wheel */}
                            <div
                                ref={rouletteRef}
                                className="absolute inset-0 rounded-full border-8 border-purple-800 bg-gradient-to-r from-gray-900 to-gray-800 transition-transform duration-5000 ease-out"
                                style={{ transformOrigin: 'center center' }}
                                data-oid="2l0gj:5"
                            >
                                {roulettePrizes.map((prize, index) => (
                                    <div
                                        key={index}
                                        className="absolute inset-0 flex items-center justify-center"
                                        style={{
                                            transform: `rotate(${index * (360 / roulettePrizes.length)}deg)`,
                                            clipPath: `polygon(50% 50%, 50% 0%, ${50 + 50 * Math.cos((index + 1) * ((2 * Math.PI) / roulettePrizes.length))}% ${50 + 50 * Math.sin((index + 1) * ((2 * Math.PI) / roulettePrizes.length))}%)`,
                                        }}
                                        data-oid="qzr.r:z"
                                    >
                                        <div
                                            className="absolute inset-0 bg-gradient-to-r"
                                            style={{
                                                background:
                                                    index % 2 === 0
                                                        ? 'linear-gradient(to right, #4f46e5, #7e22ce)'
                                                        : 'linear-gradient(to right, #be185d, #7e22ce)',
                                                clipPath:
                                                    'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
                                            }}
                                            data-oid="lr0mlnw"
                                        ></div>
                                        <div
                                            className="absolute text-xs md:text-sm font-bold text-white"
                                            style={{
                                                transform: `rotate(${90 + index * (360 / roulettePrizes.length)}deg) translateY(-100px)`,
                                                transformOrigin: 'center center',
                                                textShadow: '0 0 5px rgba(0,0,0,0.8)',
                                            }}
                                            data-oid="4f27-js"
                                        >
                                            {prize}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Center pin */}
                            <div
                                className="absolute inset-0 flex items-center justify-center pointer-events-none"
                                data-oid="vgjo59n"
                            >
                                <div
                                    className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-600 to-purple-600 shadow-[0_0_15px_rgba(219,39,119,0.8)] z-10"
                                    data-oid="_iylnay"
                                ></div>
                            </div>

                            {/* Pointer */}
                            <div
                                className="absolute top-0 left-1/2 transform -translate-x-1/2 w-4 h-12 z-20"
                                data-oid="5n5fjbn"
                            >
                                <div
                                    className="w-0 h-0 border-l-[10px] border-r-[10px] border-t-[20px] border-l-transparent border-r-transparent border-t-cyan-500 mx-auto"
                                    data-oid="e.28fp8"
                                ></div>
                            </div>
                        </div>

                        <button
                            onClick={spinRoulette}
                            disabled={isSpinning}
                            className={`px-8 py-4 rounded-full text-xl font-bold uppercase tracking-wider transition-all duration-300 ${
                                isSpinning
                                    ? 'bg-gray-700 cursor-not-allowed'
                                    : 'bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 transform hover:scale-105 shadow-[0_0_15px_rgba(219,39,119,0.5)]'
                            }`}
                            data-oid="nir..m7"
                        >
                            {isSpinning ? 'Spinning...' : 'Spin The Wheel'}
                        </button>

                        {rouletteResult && (
                            <div
                                className="mt-6 text-xl font-bold text-cyan-400 animate-pulse"
                                data-oid="ezukd.3"
                            >
                                You won: {rouletteResult}!
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Lucky Winners Section */}
            <section className="py-16 relative" data-oid="mbn7de4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="g81zdcf">
                    <h2
                        className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-500"
                        data-oid="j6-a-n9"
                    >
                        LUCKY WINNERS
                    </h2>

                    <div
                        className="bg-black bg-opacity-50 border border-purple-800 rounded-lg p-6 max-w-2xl mx-auto"
                        data-oid="v58qd:0"
                    >
                        <div className="space-y-4" data-oid="abnygr3">
                            {winners.map((winner, index) => (
                                <div
                                    key={index}
                                    className={`flex justify-between items-center p-3 rounded-lg ${
                                        index === 0
                                            ? 'bg-gradient-to-r from-purple-900/50 to-pink-900/50 animate-pulse'
                                            : 'bg-gray-900/50'
                                    }`}
                                    data-oid="z25undz"
                                >
                                    <div className="flex items-center" data-oid="r-4xsee">
                                        <div
                                            className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${
                                                index === 0
                                                    ? 'bg-gradient-to-r from-yellow-400 to-yellow-600'
                                                    : 'bg-gray-800'
                                            }`}
                                            data-oid="xi6ourf"
                                        >
                                            {index === 0 ? '👑' : index + 1}
                                        </div>
                                        <div className="font-medium" data-oid="tzh3hgk">
                                            {winner.name}
                                        </div>
                                    </div>
                                    <div
                                        className="text-xl font-bold text-cyan-400"
                                        data-oid="8jvdp9o"
                                    >
                                        {winner.prize}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-12 border-t border-purple-900 relative" data-oid=":lcwj50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="u8xr25y">
                    <div
                        className="flex flex-col md:flex-row justify-between items-center"
                        data-oid="emg1txu"
                    >
                        <div className="mb-8 md:mb-0" data-oid="5f41c0q">
                            <div
                                className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 mb-4"
                                data-oid="vaf6gyt"
                            >
                                NEON RUSH
                            </div>
                            <p className="text-purple-300 max-w-md" data-oid="d74.zii">
                                The ultimate retro-futuristic social casino experience. Play
                                responsibly.
                            </p>
                        </div>

                        <div className="flex space-x-8 mb-8 md:mb-0" data-oid="fn-9awm">
                            {['♠️', '♥️', '♦️', '♣️', '🎲'].map((icon, index) => (
                                <div
                                    key={index}
                                    className="text-2xl animate-bounce"
                                    style={{ animationDelay: `${index * 0.2}s` }}
                                    data-oid="mm-gw-o"
                                >
                                    {icon}
                                </div>
                            ))}
                        </div>

                        <div className="flex space-x-4" data-oid="4zshbfn">
                            {['Twitter', 'Facebook', 'Instagram', 'Discord'].map(
                                (social, index) => (
                                    <a
                                        key={index}
                                        href="#"
                                        className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-800 to-pink-800 flex items-center justify-center hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
                                        data-oid="sey-wtv"
                                    >
                                        {social[0]}
                                    </a>
                                ),
                            )}
                        </div>
                    </div>

                    <div
                        className="mt-8 pt-8 border-t border-purple-800/50 text-center text-purple-400 text-sm"
                        data-oid="wg3fw56"
                    >
                        © 2023 Neon Rush Social Casino. All rights reserved. 18+
                    </div>
                </div>
            </footer>

            {/* Global CSS for animations */}
            <style jsx global data-oid="5n5zgz3">{`
                @keyframes spin3D {
                    0% {
                        transform: rotateY(0deg) rotateX(10deg);
                    }
                    100% {
                        transform: rotateY(1080deg) rotateX(10deg);
                    }
                }

                .perspective-1000 {
                    perspective: 1000px;
                }
            `}</style>
        </div>
    );
}
