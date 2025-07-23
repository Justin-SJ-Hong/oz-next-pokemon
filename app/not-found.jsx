import Link from "next/link";

export default function NotFound() {
    return (
        <div className="flex flex-col items-center">
            <p>💣 현재 해당 포켓몬이 탈옥한 상태입니다 💣</p>
            <Link href="/">포켓몬 도감으로 돌아가기</Link>
        </div>
    )
}