import { useState } from "react";
import jar from "./assets/jar.svg"; // Переконайтеся, що шлях правильний

// Виносимо масив за межі компонента (оптимізація пам'яті)
const facts = [
    "ти знаєш про мене все",
    "ти надзвичайно мила",
    "ти завжди гарнюня та смачно пахнеш",
    "з тобою завжди весело",
    "ти мудра та розумна дівчинка",
    "у тебе прекрасні блакитні очі",
    "ти безмежно красива",
    "у тебе шалена харизма",
    "тобі можна довіритись у будь-чому",
    "з тобою відчув справжнє кохання",
    "ти робиш мене кращим",
    "з тобою я - справжній",
    "ти любиш мене навіть сонного",
    "ти моє щастя",
    "ти пам’ятаєш дрібниці",
    "ти смішно злишся",
    "ти не здаєшся в складні моменти",
    "ти не боїшся бути собою",
    "ти - моє натхнення",
    "з тобою я щасливий",
    "ти завжди готова слухати мої розповіді по пів години",
    "твій характер - це щось з чимось)",
    "ти дужееее смачно готуєш",
    "ти поряд навіть у найважчі моменти",
    "ти маєш прекрасний стиль, та завжди чудесна",
    "люблю тебе навіть з синячками під очима",
    "з тобою бачу своє майбутнє",
    "люблю, бо без тебе сумую",
];

// Функція перемішування (тепер теж зовні)
const shuffleArray = (length) => {
    const arr = Array.from({ length }, (_, i) => i);
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
};

export default function Second() {
    // Ініціалізуємо order ОДРАЗУ, щоб не було білого екрану при завантаженні
    const [order, setOrder] = useState(() => shuffleArray(facts.length));
    const [step, setStep] = useState(0);

    const handleNextFact = () => {
        // Додаємо вібрацію (haptic feedback) для мобільних, якщо підтримується
        if (navigator.vibrate) navigator.vibrate(50);

        if (step >= order.length - 1) {
            setOrder(shuffleArray(facts.length)); // Нове перемішування
            setStep(0);
        } else {
            setStep((prev) => prev + 1);
        }
    };

    // Отримуємо поточний індекс
    const currentFactIndex = order[step];

    return (
        <div className="flex flex-col items-center justify-center min-h-[50vh] gap-8 p-4">
            {/* Додаємо стилі анімації прямо сюди, щоб гарантувати роботу без плагінів */}
            <style>{`
                @keyframes applePop {
                    0% { opacity: 0; transform: scale(0.5); }
                    100% { opacity: 1; transform: scale(1); }
                }
                .apple-ease {
                    animation: applePop 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                }
            `}</style>

            {/* БАНКА */}
            <div className="relative group">
                <img
                    src={jar}
                    alt="jar"
                    // w-90 не існує в стандартному Tailwind, змінив на w-72 (приблизно 280px)
                    // Додав ефекти при натисканні (scale-95)
                    className="w-72 h-auto cursor-pointer transition-transform duration-200 ease-in-out hover:scale-105 active:scale-95"
                    onClick={handleNextFact}
                />
                <p className="absolute bottom-[-30px] w-full text-center text-pink-500 text-sm animate-pulse">
                    (натисни на банку)
                </p>
            </div>

            {/* ТЕКСТ ФАКТУ */}
            <div
                // key={step} змушує React перемальовувати цей div заново при кожному кліку,
                // що перезапускає анімацію
                key={step}
                className="apple-ease mt-4 max-w-md w-full bg-white/80 backdrop-blur-sm border-2 border-red-200 rounded-2xl p-6 shadow-lg text-center"
            >
                <h2 className="text-2xl font-bold text-red-500 leading-relaxed">
                    {facts[currentFactIndex]}
                </h2>
            </div>
        </div>
    );
}