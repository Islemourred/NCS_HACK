import React from "react";

const EmploymentTab = ({
  employmentPosts,
  newPost,
  setNewPost,
  handleAddPost,
  getStatusColor,
  getStatusText,
}) => (
  <div className="space-y-8">
    <div className="card p-6 mb-6">
      <h3 className="text-xl font-bold text-neutral-800 mb-4">
        إنشاء طلب نقطة ترحيل جديدة
      </h3>
      <form
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
        onSubmit={handleAddPost}
      >
        <div>
          <label className="block text-sm font-semibold text-neutral-700 mb-2">
            العنوان
          </label>
          <input
            type="text"
            className="input-field"
            value={newPost.title}
            onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-neutral-700 mb-2">
            الموقع
          </label>
          <input
            type="text"
            className="input-field"
            value={newPost.place}
            onChange={(e) => setNewPost({ ...newPost, place: e.target.value })}
            required
          />
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-semibold text-neutral-700 mb-2">
            الوصف
          </label>
          <textarea
            className="input-field"
            value={newPost.description}
            onChange={(e) =>
              setNewPost({ ...newPost, description: e.target.value })
            }
            required
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-neutral-700 mb-2">
            المتطلبات
          </label>
          <input
            type="text"
            className="input-field"
            value={newPost.requirements}
            onChange={(e) =>
              setNewPost({ ...newPost, requirements: e.target.value })
            }
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-neutral-700 mb-2">
            المساحة
          </label>
          <input
            type="text"
            className="input-field"
            value={newPost.space}
            onChange={(e) => setNewPost({ ...newPost, space: e.target.value })}
          />
        </div>
        <div className="md:col-span-2 flex justify-end">
          <button type="submit" className="btn-primary">
            إضافة الطلب
          </button>
        </div>
      </form>
    </div>
    <div className="card p-6">
      <h3 className="text-xl font-bold text-neutral-800 mb-4">
        طلبات نقاط الترحيل الحالية
      </h3>
      <div className="space-y-4">
        {employmentPosts.length === 0 && (
          <div className="text-neutral-500">لا توجد طلبات حالياً.</div>
        )}
        {employmentPosts.map((post) => (
          <div key={post.id} className="border-b border-neutral-200 pb-4 mb-4">
            <h4 className="text-lg font-bold text-primary-700 mb-1">
              {post.title}
            </h4>
            <div className="text-neutral-700 mb-1">الموقع: {post.place}</div>
            <div className="text-neutral-600 mb-1">{post.description}</div>
            {post.requirements && (
              <div className="text-sm text-neutral-500 mb-1">
                المتطلبات: {post.requirements}
              </div>
            )}
            {post.space && (
              <div className="text-sm text-success-600 mb-1">
                المساحة: {post.space}
              </div>
            )}
            <span
              className={`px-2 py-1 rounded-full text-xs font-semibold bg-${getStatusColor(
                post.status
              )}-100 text-${getStatusColor(post.status)}-700`}
            >
              {getStatusText(post.status)}
            </span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default EmploymentTab;
