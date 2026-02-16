import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-blue-50 font-sans text-gray-900">
      <header className="bg-blue-900 text-white p-6 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold tracking-tight text-white flex items-center gap-2">
            <span>📊</span> 신회계사 사무소
          </h1>
          <nav className="space-x-6 hidden md:flex text-blue-100 font-medium">
            <a href="#" className="hover:text-white transition">회계감사</a>
            <a href="#" className="hover:text-white transition">경영자문</a>
            <a href="#" className="hover:text-white transition">기업세무</a>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12">
        <section className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-4 text-blue-950">기업의 내일을 설계하는 투명한 회계</h2>
          <p className="text-xl md:text-2xl text-gray-700 mb-8">신뢰를 바탕으로 기업의 재무 건전성을 확보하고 최적의 성장 전략을 제안합니다.</p>
          <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
            <button className="bg-blue-900 hover:bg-blue-950 text-white font-bold py-3 px-10 rounded text-lg shadow-lg transition duration-300">
              상담 예약
            </button>
            <button className="bg-white hover:bg-gray-100 text-blue-900 border-2 border-blue-900 font-bold py-3 px-10 rounded text-lg shadow-md transition duration-300">
              제안서 요청
            </button>
          </div>
        </section>

        <section className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-10 rounded shadow-2xl border-l-8 border-blue-900">
            <h3 className="text-2xl font-bold mb-4 text-blue-900">회계 감사</h3>
            <p className="text-gray-600 leading-relaxed mb-6">법정 감사 및 임의 감사, 특수 목적 감사 등 투명한 재무 상태 보고를 위한 전문 감사를 수행합니다.</p>
            <div className="text-blue-900 font-bold cursor-pointer">더 알아보기 →</div>
          </div>
          <div className="bg-white p-10 rounded shadow-2xl border-l-8 border-blue-900">
            <h3 className="text-2xl font-bold mb-4 text-blue-900">경영 자문</h3>
            <p className="text-gray-600 leading-relaxed mb-6">M&A, 기업 가치 평가, 내부 통제 구축 등 경영 의사결정을 위한 다각도의 분석과 솔루션을 제공합니다.</p>
            <div className="text-blue-900 font-bold cursor-pointer">더 알아보기 →</div>
          </div>
          <div className="bg-white p-10 rounded shadow-2xl border-l-8 border-blue-900">
            <h3 className="text-2xl font-bold mb-4 text-blue-900">기업 세무</h3>
            <p className="text-gray-600 leading-relaxed mb-6">법인세 최적화, 연결 납세, 국제 조세 등 복잡한 기업 세무 이슈를 안정적으로 관리해 드립니다.</p>
            <div className="text-blue-900 font-bold cursor-pointer">더 알아보기 →</div>
          </div>
        </section>

        <section className="bg-slate-200 p-8 rounded flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
                <h3 className="text-3xl font-bold mb-4 text-blue-900">글로벌 스탠다드에 맞춘 전문성</h3>
                <p className="text-gray-700 mb-6">우리는 급변하는 경제 환경 속에서 기업이 지속 가능한 성장을 이룰 수 있도록 글로벌 기준의 전문성과 최신 정보를 바탕으로 최상의 서비스를 제공합니다.</p>
                <div className="flex gap-10">
                    <div>
                        <div className="text-4xl font-bold text-blue-900">20+</div>
                        <div className="text-sm text-gray-500">업력 (년)</div>
                    </div>
                    <div>
                        <div className="text-4xl font-bold text-blue-900">500+</div>
                        <div className="text-sm text-gray-500">고객사</div>
                    </div>
                </div>
            </div>
            <div className="md:w-1/2 grid grid-cols-2 gap-4">
                <div className="bg-blue-900 h-32 rounded flex items-center justify-center text-white font-bold text-xl">정확</div>
                <div className="bg-blue-800 h-32 rounded flex items-center justify-center text-white font-bold text-xl">신속</div>
                <div className="bg-blue-700 h-32 rounded flex items-center justify-center text-white font-bold text-xl">신뢰</div>
                <div className="bg-blue-600 h-32 rounded flex items-center justify-center text-white font-bold text-xl">혁신</div>
            </div>
        </section>
      </main>

      <footer className="bg-blue-950 text-white py-16 px-6 mt-16">
        <div className="container mx-auto grid md:grid-cols-4 gap-12">
            <div className="col-span-2">
                <h2 className="text-2xl font-bold mb-6">신회계사 사무소</h2>
                <p className="text-blue-200 mb-6 max-w-md">최고의 전문성과 깊이 있는 통찰력으로 기업의 성공적인 미래를 함께 만들어가는 파트너가 되겠습니다.</p>
            </div>
            <div>
                <h4 className="font-bold mb-4 uppercase tracking-wider">Contact</h4>
                <p className="text-blue-200 text-sm">대구광역시 중구 달구벌대로 567</p>
                <p className="text-blue-200 text-sm">Tel: 053-123-8888</p>
                <p className="text-blue-200 text-sm">Fax: 053-123-8889</p>
            </div>
            <div>
                <h4 className="font-bold mb-4 uppercase tracking-wider">Support</h4>
                <p className="text-blue-200 text-sm">자주 묻는 질문</p>
                <p className="text-blue-200 text-sm">온라인 문의</p>
                <p className="text-blue-200 text-sm">인재 채용</p>
            </div>
        </div>
        <div className="container mx-auto mt-12 pt-8 border-t border-blue-900 text-center text-blue-400 text-xs">
          © 2026 Shin Accounting Corporation. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
