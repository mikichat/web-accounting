import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 font-sans text-gray-900">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100 shadow-sm">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 flex items-center gap-2">
            <span className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center text-white text-lg shadow-lg">📊</span>
            <span className="hidden sm:inline">신회계사</span>
          </h1>
          <nav className="space-x-8 hidden md:flex text-gray-600 font-medium">
            <a href="#services" className="hover:text-blue-700 transition-colors">서비스</a>
            <a href="#about" className="hover:text-blue-700 transition-colors">회사 소개</a>
            <a href="#stats" className="hover:text-blue-700 transition-colors">실적</a>
            <a href="#contact" className="hover:text-blue-700 transition-colors">연락처</a>
          </nav>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-full shadow-lg shadow-blue-200 transition-all hover:shadow-xl hover:shadow-blue-300 hover:-translate-y-0.5">
            상담하기
          </button>
        </div>
      </header>

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900" />
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
          
          <div className="container mx-auto px-6 py-32 relative z-10">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2 mb-8">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-blue-100 text-sm font-medium">대구광역시 인정 회계사</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
                기업의 내일을<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-indigo-200">설계하는 투명한 회계</span>
              </h2>
              <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-2xl leading-relaxed">
                신뢰를 바탕으로 기업의 재무 건전성을 확보하고<br className="hidden md:block" />
                최적의 성장 전략을 제안합니다.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-blue-900 hover:bg-blue-50 font-bold py-4 px-10 rounded-full text-lg shadow-2xl shadow-blue-900/30 transition-all hover:shadow-xl hover:-translate-y-1">
                  상담 예약하기
                </button>
                <button className="border-2 border-white/30 text-white hover:bg-white/10 font-bold py-4 px-10 rounded-full text-lg backdrop-blur-sm transition-all">
                  제안서 요청
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm">Our Services</span>
              <h3 className="text-4xl md:text-5xl font-bold mt-4 text-gray-900">전문 서비스</h3>
              <p className="text-gray-500 mt-4 max-w-2xl mx-auto">다양한 산업 분야의 전문性与 경험을 바탕으로 최적의 솔루션을 제공합니다.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="group bg-gradient-to-br from-gray-50 to-white p-10 rounded-3xl border border-gray-100 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-100/50 transition-all duration-500">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center text-white text-2xl mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-blue-200">
                  📋
                </div>
                <h4 className="text-2xl font-bold mb-4 text-gray-900">회계 감사</h4>
                <p className="text-gray-600 leading-relaxed mb-6">법정 감사 및 임의 감사, 특수 목적 감사 등 투명한 재무 상태 보고를 위한 전문 감사를 수행합니다.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-blue-50 text-blue-700 text-sm px-3 py-1 rounded-full">재무제표 감사</span>
                  <span className="bg-blue-50 text-blue-700 text-sm px-3 py-1 rounded-full">내부통제監査</span>
                </div>
              </div>

              <div className="group bg-gradient-to-br from-gray-50 to-white p-10 rounded-3xl border border-gray-100 hover:border-indigo-200 hover:shadow-2xl hover:shadow-indigo-100/50 transition-all duration-500">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-700 rounded-2xl flex items-center justify-center text-white text-2xl mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-indigo-200">
                  💼
                </div>
                <h4 className="text-2xl font-bold mb-4 text-gray-900">경영 자문</h4>
                <p className="text-gray-600 leading-relaxed mb-6">M&A, 기업 가치 평가, 내부 통제 구축 등 경영 의사결정을 위한 다각도의 분석과 솔루션을 제공합니다.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-indigo-50 text-indigo-700 text-sm px-3 py-1 rounded-full">M&A 자문</span>
                  <span className="bg-indigo-50 text-indigo-700 text-sm px-3 py-1 rounded-full">기업 가치 평가</span>
                </div>
              </div>

              <div className="group bg-gradient-to-br from-gray-50 to-white p-10 rounded-3xl border border-gray-100 hover:border-emerald-200 hover:shadow-2xl hover:shadow-emerald-100/50 transition-all duration-500">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-2xl flex items-center justify-center text-white text-2xl mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-emerald-200">
                  📊
                </div>
                <h4 className="text-2xl font-bold mb-4 text-gray-900">기업 세무</h4>
                <p className="text-gray-600 leading-relaxed mb-6">법인세 최적화, 연결 납세, 국제 조세 등 복잡한 기업 세무 이슈를 안정적으로 관리해 드립니다.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-emerald-50 text-emerald-700 text-sm px-3 py-1 rounded-full">법인세 신고</span>
                  <span className="bg-emerald-50 text-emerald-700 text-sm px-3 py-1 rounded-full">국제조세</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section id="stats" className="py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl" />
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="grid md:grid-cols-4 gap-12 text-center">
              <div>
                <div className="text-5xl md:text-6xl font-extrabold text-white mb-2">20+</div>
                <div className="text-blue-200 font-medium">년 역사</div>
              </div>
              <div>
                <div className="text-5xl md:text-6xl font-extrabold text-white mb-2">500+</div>
                <div className="text-blue-200 font-medium">고객사</div>
              </div>
              <div>
                <div className="text-5xl md:text-6xl font-extrabold text-white mb-2">1,200+</div>
                <div className="text-blue-200 font-medium">감리 수행</div>
              </div>
              <div>
                <div className="text-5xl md:text-6xl font-extrabold text-white mb-2">98%</div>
                <div className="text-blue-200 font-medium">고객 만족도</div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm">About Us</span>
                <h3 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-gray-900">글로벌 스탠다드에 맞춘 전문성</h3>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  우리는 급변하는 경제 환경 속에서 기업이 지속 가능한 성장을 이룰 수 있도록 글로벌 기준의 전문성과 최신 정보를 바탕으로 최상의 서비스를 제공합니다.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                      <span className="text-blue-600 text-xl">✓</span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">정확성</div>
                      <div className="text-gray-500 text-sm">정밀한 분석과 꼼꼼한 검증</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center">
                      <span className="text-indigo-600 text-xl">⚡</span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">신속성</div>
                      <div className="text-gray-500 text-sm">빠르고効率的な 대응</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                      <span className="text-emerald-600 text-xl">🛡️</span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">신뢰성</div>
                      <div className="text-gray-500 text-sm">30년간 쌓아온 평판과 신뢰</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-3xl p-8">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                      <div className="text-3xl mb-2">🏆</div>
                      <div className="font-bold text-gray-900">한국감사학회</div>
                      <div className="text-gray-500 text-sm">수석감사법인 선정</div>
                    </div>
                    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                      <div className="text-3xl mb-2">🌐</div>
                      <div className="font-bold text-gray-900">IFAC</div>
                      <div className="text-gray-500 text-sm">국제회계사협회 회원</div>
                    </div>
                    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                      <div className="text-3xl mb-2">📜</div>
                      <div className="font-bold text-gray-900">ISO 9001</div>
                      <div className="text-gray-500 text-sm">품질경영인증</div>
                    </div>
                    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                      <div className="text-3xl mb-2">⭐</div>
                      <div className="font-bold text-gray-900">AAAA</div>
                      <div className="text-gray-500 text-sm">신용평가 최고등급</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section id="contact" className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="bg-gradient-to-br from-blue-900 to-indigo-900 rounded-3xl p-12 md:p-16 text-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-10 left-10 w-48 h-48 bg-blue-400 rounded-full mix-blend-multiply filter blur-2xl" />
                <div className="absolute bottom-10 right-10 w-64 h-64 bg-indigo-400 rounded-full mix-blend-multiply filter blur-2xl" />
              </div>
              <div className="relative z-10">
                <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">전문가와 상담하고 싶으신가요?</h3>
                <p className="text-blue-100 text-xl mb-10 max-w-2xl mx-auto">성장의 새로운篇章을 여는 첫걸음, 신회계사와 함께하세요.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-white text-blue-900 hover:bg-blue-50 font-bold py-4 px-10 rounded-full text-lg shadow-2xl transition-all hover:-translate-y-1">
                    📞 053-123-8888
                  </button>
                  <button className="border-2 border-white/30 text-white hover:bg-white/10 font-bold py-4 px-10 rounded-full text-lg transition-all">
                    💬 카카오톡 상담
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <span className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center text-lg">📊</span>
                신회계사 사무소
              </h2>
              <p className="text-gray-400 mb-6 max-w-md">최고의 전문성과 깊이 있는 통찰력으로 기업의 성공적인 미래를 함께 만들어가는 파트너가 되겠습니다.</p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors">
                  <span>📱</span>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors">
                  <span>💼</span>
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-gray-300">서비스</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">회계 감사</a></li>
                <li><a href="#" className="hover:text-white transition-colors">경영 자문</a></li>
                <li><a href="#" className="hover:text-white transition-colors">기업 세무</a></li>
                <li><a href="#" className="hover:text-white transition-colors">세무 신고</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-gray-300">연락처</h4>
              <ul className="space-y-3 text-gray-400">
                <li>대구광역시 중구</li>
                <li>달구벌대로 567</li>
                <li>Tel: 053-123-8888</li>
                <li>Fax: 053-123-8889</li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
            © 2026 Shin Accounting Corporation. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
