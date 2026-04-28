const teamMembers = [
  {
    name: "马青浙",
    title: "董事长",
    description: "合肥工业大学本科、东南大学硕士、长江商学院EMBA。浙江优创创始人，深耕金融科技领域20余年，服务全国200余家商业银行。",
    highlights: ["20年+金融科技", "200+商业银行", "专精特新企业"],
  },
  {
    name: "夏文勇",
    title: "CEO",
    description: "合肥工业大学计算机本科，25年+金融科技行业深耕。主导深交所2项AI专项课题，从0到1搭建千万级并发高可用系统。",
    highlights: ["25年+金融科技", "千万级并发架构", "深交所AI课题"],
  },
  {
    name: "胡海",
    title: "CTO",
    description: "北京航空航天大学博士，20年全球政企数字化与AI实战。硅谷连续创业者，主导G7榜首国家级生成式AI治理框架。",
    highlights: ["北航博士", "硅谷连续创业", "G7 AI治理框架"],
  },
];

export function Team() {
  return (
    <section id="team" className="relative py-24 sm:py-32 bg-section-alt">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-muted mb-6">核心团队</div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">政企深耕 · 技术硬核 · 全球视野</h2>
          <p className="text-muted text-lg max-w-3xl mx-auto">拥有20余年金融科技深耕背景，背靠覆盖全国200余家商业银行的服务网络</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {teamMembers.map((member) => (
            <div key={member.name} className="group rounded-2xl border border-card-border bg-card p-8 hover:border-accent/30 transition-all duration-300">
              <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                <span className="text-xl font-bold text-accent">{member.name[0]}</span>
              </div>
              <div className="mb-2">
                <span className="text-xs font-mono text-accent">{member.title}</span>
              </div>
              <h3 className="text-xl font-bold mb-4">{member.name}</h3>
              <p className="text-sm text-muted leading-relaxed mb-6">{member.description}</p>
              <div className="flex flex-wrap gap-2">
                {member.highlights.map((h) => (
                  <span key={h} className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-muted">{h}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
