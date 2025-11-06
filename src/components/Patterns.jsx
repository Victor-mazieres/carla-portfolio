import React from "react";

/* === PATTERN 1 - Rectangle diagonal doré === */
export function Pattern1() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute right-0 top-0 h-full w-[65%] sm:w-[55%] md:w-[50%] bg-primary/15 transform -skew-x-12 origin-right" />
    </div>
  );
}

/* === PATTERN 2 - Cercles dorés fluides === */
export function Pattern2() {
  // On réduit le nombre de bulles sur mobile
  const baseBubbles = [
    { x: "12%", y: "20%", size: 120 },
    { x: "45%", y: "10%", size: 160 },
    { x: "75%", y: "25%", size: 180 },
  ];
  const bubbles = [
    ...baseBubbles,
    { x: "85%", y: "65%", size: 200 },
    { x: "55%", y: "80%", size: 150 },
    { x: "25%", y: "70%", size: 170 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden z-0">
      {bubbles.map((b, i) => (
        <div
          key={i}
          className="absolute rounded-full border-[10px] sm:border-[14px] md:border-[18px] border-primary/40 bg-transparent"
          style={{
            top: b.y,
            left: b.x,
            width: `clamp(${b.size / 1.5}px, ${b.size}px, ${b.size * 1.2}px)`,
            height: `clamp(${b.size / 1.5}px, ${b.size}px, ${b.size * 1.2}px)`,
            transform: "translate(-50%, -50%)",
          }}
        />
      ))}
    </div>
  );
}

/* === PATTERN 3 - Grand “V” stylisé à gauche === */
export function Pattern3() {
  return (
    <div className="absolute inset-0 flex items-center justify-start overflow-hidden">
      <div className="absolute left-[-25vw] flex items-center justify-start">
        <div className="absolute w-[80vw] sm:w-[70vw] md:w-[60vw] h-[140vh] sm:h-[160vh] bg-primary/20 rotate-45 origin-bottom-right" />
        <div className="absolute w-[80vw] sm:w-[70vw] md:w-[60vw] h-[140vh] sm:h-[160vh] bg-primary/20 -rotate-45 origin-bottom-left" />
      </div>
    </div>
  );
}

/* === PATTERN 4 - Ondes lumineuses croisées === */
export function Pattern4() {
  // Flocons réduits sur mobile
  const flakes = [
    { x: "15%", y: "20%", size: 18, color: "white", rotate: 10 },
    { x: "50%", y: "25%", size: 25, color: "#C9A13B", rotate: 45 },
    { x: "70%", y: "10%", size: 30, color: "white", rotate: -15 },
    { x: "85%", y: "35%", size: 22, color: "#C9A13B", rotate: 20 },
    { x: "30%", y: "75%", size: 28, color: "white", rotate: 15 },
    { x: "60%", y: "80%", size: 35, color: "#C9A13B", rotate: -25 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden z-0">
      {flakes.map((f, i) => (
        <div
          key={i}
          className="absolute"
          style={{
            top: f.y,
            left: f.x,
            transform: `translate(-50%, -50%) rotate(${f.rotate}deg)`,
          }}
        >
          <div
            className="relative"
            style={{
              width: `${f.size}px`,
              height: `${f.size}px`,
            }}
          >
            <div
              className="absolute left-1/2 top-0 h-full w-[2px] rounded-full"
              style={{
                backgroundColor: f.color,
                transform: "translateX(-50%)",
              }}
            />
            <div
              className="absolute top-1/2 left-0 w-full h-[2px] rounded-full"
              style={{
                backgroundColor: f.color,
                transform: "translateY(-50%)",
              }}
            />
            <div
              className="absolute rounded-full"
              style={{
                top: "50%",
                left: "50%",
                width: `${f.size / 3}px`,
                height: `${f.size / 3}px`,
                backgroundColor: f.color,
                transform: "translate(-50%, -50%)",
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

/* === PATTERN 5 - Courbes fluides horizontales === */
export function Pattern5() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-primary/10 to-transparent opacity-60 blur-lg sm:blur-xl" />
      <div className="absolute top-1/3 left-0 w-full h-full bg-gradient-to-r from-primary/5 via-transparent to-primary/10 blur-2xl sm:blur-3xl rotate-2" />
    </div>
  );
}

/* === PATTERN 6 - Halo central et lignes croisées === */
export function Pattern6() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] sm:w-[60%] md:w-[50%] h-[70%] sm:h-[60%] md:h-[50%] bg-primary/10 rounded-full blur-3xl opacity-25" />
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-transparent opacity-40 rotate-3" />
      <div className="absolute inset-0 bg-gradient-to-bl from-primary/10 via-transparent to-transparent opacity-40 -rotate-3" />
    </div>
  );
}

/* === PATTERN 7 - Spirale subtile en dégradé === */
export function Pattern7() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute w-[200%] h-[200%] left-[-50%] top-[-50%] bg-[radial-gradient(circle_at_center,_rgba(201,161,59,0.15)_0%,_transparent_70%)] animate-spin-slow" />
    </div>
  );
}
